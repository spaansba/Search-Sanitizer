import { addTopOfPage, updateBlockedCount } from "../components/topPage"
import { BlockedUrlData, ScriptSettings } from "../types"

export class GoogleScriptService {
  searchElement: Element
  processedResults: Set<Element> = new Set()
  private _blockedCount: number = 0
  private _resultsAreHidden: boolean = false
  private isExtensionOn: boolean = true
  blockedUrlsDict: BlockedUrlData

  constructor(blockedUrlsDict: BlockedUrlData, isExtensionOn: boolean) {
    this.blockedUrlsDict = blockedUrlsDict
    this.isExtensionOn = isExtensionOn
    this.addDocumentHead()
    this.addEventListeners(this.isExtensionOn)
  }

  // Return a promise that resolves when the search element is found
  getSearchElement(): Promise<void> {
    return new Promise((resolve) => {
      new MutationObserver((_, obs) => {
        const searchElement = document.querySelector("#search")
        if (searchElement) {
          this.searchElement = searchElement
          obs.disconnect()
          resolve()
        }
      }).observe(document.body, {
        childList: true,
        subtree: true,
      })
    })
  }

  addEventListeners(extensionOn: boolean) {
    document.addEventListener("DOMContentLoaded", () => {
      addTopOfPage(
        () => this.getBlockedElementsVisibility(),
        (value) => this.setBlockedElementsVisibility(value),
        this.blockedCount,
        this.isExtensionOn
      )
    })
  }

  // Adds extra styles to the head of the document
  addDocumentHead(): void {
    const style = document.createElement("style")
    style.id = "Site Blocker Custom Styles"
    style.textContent = `
        /* Display Styles */
        [card-show="true"] { display: block !important; }
        [card-show="false"] { display: none !important; }
    
        /* Card Color Styles */
        [card-relevant="true"] {opacity: 0.7 !important}
      `
    document.head.appendChild(style)
  }

  get blockedCount(): number {
    return this._blockedCount
  }

  incrementBlockedCount() {
    this._blockedCount++
  }

  // Mark element as blocked and also increment the block count
  markElementAsBlocked(element: HTMLElement): void {
    this.incrementBlockedCount()
    updateBlockedCount(this.blockedCount)
    element.setAttribute(
      "card-show",
      this.getBlockedElementsVisibility().toString()
    )
    element.setAttribute("card-relevant", "true")
  }

  getBlockedElementsVisibility(): boolean {
    return this._resultsAreHidden
  }

  setBlockedElementsVisibility(value: boolean): void {
    this._resultsAreHidden = value
    this.updateBlockedElementsVisibility()
  }

  // Users can toggle if blocked content is hidden or visible
  updateBlockedElementsVisibility() {
    const hiddenElements = document.querySelectorAll("[card-show]")
    hiddenElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.setAttribute("card-show", this._resultsAreHidden.toString())
      }
    })
  }

  isPatternUrl(url: URL, urlString: string, pattern: string): boolean {
    try {
      if (!pattern) {
        debugger
        console.log("not")
        return false
      }
      pattern = this.removeTrailingSlash(pattern.toLowerCase())

      const patternVariations = [
        pattern,
        `www.${pattern}`,
        `https://${pattern}`,
        `https://www.${pattern}`,
        `http://${pattern}`,
        `http://www.${pattern}`,
      ]

      const comparisons = [
        urlString,
        url.origin.toLowerCase(),
        url.host.toLowerCase(),
        url.hostname.toLowerCase(),
        this.removeTrailingSlash(url.href.toLowerCase()),
      ]

      for (const comp of comparisons) {
        for (const variation of patternVariations) {
          if (comp === variation) {
            return true
          }
        }
      }

      return false
    } catch (error) {
      console.error(`Invalid URL`)
      return false
    }
  }

  removeTrailingSlash(s: string): string {
    return s.endsWith("/") ? s.slice(0, -1) : s
  }

  isPatternWildcard(urlString: string, pattern: string): boolean {
    urlString = urlString.toLowerCase()
    pattern = pattern.toLowerCase()

    const escapedPattern = pattern
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\\\*/g, ".*")

    const regex = new RegExp(`^${escapedPattern}$`)
    return regex.test(urlString)
  }

  shouldUrlBeBlocked(urlString: string, blockedUrls: BlockedUrlData): boolean {
    try {
      const url = new URL(urlString)
      for (const pattern of Object.keys(blockedUrls.blockedUrlData)) {
        // Here we check if the pattern is an URL and if it matches the current checked URL
        if (this.isPatternUrl(url, urlString, pattern)) {
          console.log(`Blocked URL: ${urlString} matched pattern: ${pattern}`)
          blockedUrls.blockedUrlData[pattern].s++
          return true
        }

        // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
        if (this.isPatternWildcard(urlString, pattern)) {
          console.log(`Blocked URL: ${url} matched pattern: ${pattern}`)
          blockedUrls.blockedUrlData[pattern].s++
          return true
        }
      }
      return false
    } catch (error) {
      console.error(`Error processing ${urlString}:`, error)
      return false
    }
  }
  isElementVisible(element: HTMLElement): boolean {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    )
  }

  filterResults(queryString: string) {
    const searchResults = this.searchElement.querySelectorAll(queryString)
    searchResults.forEach((result) => {
      if (this.processedResults.has(result)) {
        return
      }
      this.processedResults.add(result)
      result.setAttribute("data-processed", "true")

      const links = result.querySelectorAll("a")
      const cites = result.querySelectorAll("cite")
      const span = result.querySelectorAll("span")

      for (const link of links) {
        if (
          link.href &&
          this.shouldUrlBeBlocked(link.href, this.blockedUrlsDict) &&
          this.isElementVisible(link)
        ) {
          console.log("yes")
          this.markElementAsBlocked(result as HTMLElement)
          return
        }
      }

      for (const cite of cites) {
        console.log(cite)
        if (
          cite.textContent &&
          this.shouldUrlBeBlocked(cite.textContent, this.blockedUrlsDict) &&
          this.isElementVisible(cite)
        ) {
          console.log("yes")
          this.markElementAsBlocked(result as HTMLElement)
          return
        }
      }
    })
  }
}
