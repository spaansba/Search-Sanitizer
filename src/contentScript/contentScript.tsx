import { addTopOfPage, updateBlockedCount } from "../components/topPage"
import { BlockedUrlData } from "../types"

export class GoogleScriptService {
  searchElement: Element
  processedResults: Set<Element> = new Set()
  private _blockedCount: number = 0
  public get blockedCount(): number {
    return this._blockedCount
  }
  private _resultsAreHidden: boolean = false
  public get resultsAreHidden(): boolean {
    return this._resultsAreHidden
  }
  setBlockedElementsVisibility(value: boolean): void {
    this._resultsAreHidden = value
    this.updateBlockedElementsVisibility()
  }
  private isExtensionOn: boolean = true
  blockedUrlsDict: BlockedUrlData

  constructor(blockedUrlsDict: BlockedUrlData, isExtensionOn: boolean) {
    this.blockedUrlsDict = blockedUrlsDict
    this.isExtensionOn = isExtensionOn
    this.addDocumentHead()
    this.addEventListeners()
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

  private addEventListeners() {
    document.addEventListener("DOMContentLoaded", () => {
      addTopOfPage(
        () => this.resultsAreHidden,
        (value) => this.setBlockedElementsVisibility(value),
        this.blockedCount,
        this.isExtensionOn
      )
    })
  }

  // Adds extra styles to the head of the document
  private addDocumentHead(): void {
    const style = document.createElement("style")
    style.id = "Site Blocker Custom Styles"
    style.textContent = `
        /* Display Styles */
        [card-show="true"] { display: block !important; }
        [card-show="false"] { display: none !important; }
    
        /* Card Color Styles */
        [card-relevant="true"] {opacity: 0.3 !important}
      `
    document.head.appendChild(style)
  }

  incrementBlockedCount() {
    this._blockedCount++
  }

  // Mark element as blocked and also increment the block count
  markElementAsBlocked(element: HTMLElement): void {
    this.incrementBlockedCount()
    updateBlockedCount(this.blockedCount)
    element.setAttribute("card-show", this.resultsAreHidden.toString())
    element.setAttribute("card-relevant", "true")
  }

  // Users can toggle if blocked content is hidden or visible
  private updateBlockedElementsVisibility() {
    const hiddenElements = document.querySelectorAll("[card-show]")
    hiddenElements.forEach((element) => {
      if (element instanceof HTMLElement) {
        element.setAttribute("card-show", this._resultsAreHidden.toString())
      }
    })
  }

  private isPatternUrl(url: URL, urlString: string, pattern: string): boolean {
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

  private removeTrailingSlash(s: string): string {
    return s.endsWith("/") ? s.slice(0, -1) : s
  }

  private isPatternWildcard(urlString: string, pattern: string): boolean {
    urlString = urlString.toLowerCase()
    pattern = pattern.toLowerCase()

    const escapedPattern = pattern
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\\\*/g, ".*")

    const regex = new RegExp(`^${escapedPattern}$`)
    return regex.test(urlString)
  }

  shouldUrlBeBlocked(
    googleSearchUrl: string,
    blockedUrlsDict: BlockedUrlData
  ): boolean {
    try {
      const url = new URL(googleSearchUrl)
      for (const pattern of Object.keys(blockedUrlsDict.blockedUrlData)) {
        // Here we check if the pattern is an URL and if it matches the current checked URL
        if (this.isPatternUrl(url, googleSearchUrl, pattern)) {
          console.log(
            `Blocked URL: ${googleSearchUrl} matched pattern: ${pattern}`
          )
          blockedUrlsDict.blockedUrlData[pattern].s++
          return true
        }

        // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
        if (this.isPatternWildcard(googleSearchUrl, pattern)) {
          console.log(`Blocked URL: ${url} matched pattern: ${pattern}`)
          blockedUrlsDict.blockedUrlData[pattern].s++
          return true
        }
      }
      return false
    } catch (error) {
      console.log(googleSearchUrl)
      console.error(`Error processing:`, error)
      return false
    }
  }
  private isElementVisible(element: HTMLElement): boolean {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    )
  }

  processSearchResultsForBlocking(queryString: string) {
    const searchResults = this.searchElement.querySelectorAll(queryString)
    searchResults.forEach((result) => {
      if (this.processedResults.has(result)) {
        return
      }
      this.processedResults.add(result)
      result.setAttribute("data-processed", "true")

      if (
        this.checkLinksForBlockedUrls(result) ||
        this.checkCitesForBlockedUrls(result)
      ) {
        this.markElementAsBlocked(result as HTMLElement)
      }
    })
  }

  checkLinksForBlockedUrls(result: Element): boolean {
    const links = result.querySelectorAll("a")
    for (const link of links) {
      if (
        link.href &&
        this.shouldUrlBeBlocked(link.href, this.blockedUrlsDict) &&
        this.isElementVisible(link)
      ) {
        console.log("yes")
        return true
      }
    }
    return false
  }

  checkCitesForBlockedUrls(result: Element): boolean {
    const cites = result.querySelectorAll("cite")
    for (const cite of cites) {
      let url = cite.textContent.split(" ")[0] // Get first text in cite (it concatenates all descendants)

      if (url) {
        // Add 'https://' if the URL doesn't start with 'http://' or 'https://'
        if (!/^https?:\/\//i.test(url)) {
          url = "https://" + url
        }

        if (
          this.shouldUrlBeBlocked(url, this.blockedUrlsDict) &&
          this.isElementVisible(cite)
        ) {
          return true
        }
      }
    }
    return false
  }
}
