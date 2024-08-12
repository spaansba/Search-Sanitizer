import type { contentRelatedSettings } from "."
import { addTopOfPage, updateBlockedCount } from "../components/topPage"
import { blockCategories, BlockedUrlDataLocal, searchCategories } from "../types"
import { BlockedCountUpdateManager } from "./blockedCountUpdateManager"

export class GoogleScriptService {
  searchResultsContainer: Element
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
  private settings: contentRelatedSettings
  blockedUrlsDict: { blockedUrlData: BlockedUrlDataLocal }
  private updateManager: BlockedCountUpdateManager

  constructor(
    blockedUrlsDict: { blockedUrlData: BlockedUrlDataLocal },
    settings: contentRelatedSettings,
    lifeTimeBlocks: blockCategories
  ) {
    this.blockedUrlsDict = blockedUrlsDict
    this.settings = settings
    this.addDocumentHead()
    this.addEventListeners()
    this.updateManager = new BlockedCountUpdateManager(
      blockedUrlsDict,
      lifeTimeBlocks,
      this.updatedBlockedCallback.bind(this)
    )

    // Initialize the searchContainer for if it cant be found
    this.searchResultsContainer = document.body
  }

  // Return a promise that resolves when the search element is found
  getSearchElement(): Promise<void> {
    return new Promise((resolve) => {
      new MutationObserver((_, obs) => {
        const searchElement = document.querySelector("#search")
        if (searchElement) {
          this.searchResultsContainer = searchElement
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
        this.settings.extensionIsOn
      )
    })
  }

  // Adds extra styles to the head of the document
  private addDocumentHead(): void {
    const style = document.createElement("style")
    style.id = "Site Blocker Custom Styles"
    style.textContent = `
        /* Display Styles */
        [card-show="false"] { display: none !important; }
        /* Card Color Styles */
        [card-relevant="true"] {opacity: 0.3 !important}
      `
    document.head.appendChild(style)
  } //  [card-show="true"] { display: block !important; }

  private incrementBlockCount(userPattern: string, searchCategory: searchCategories) {
    this._blockedCount++
    this.updateManager.incrementCount(userPattern, searchCategory)
  }

  private updatedBlockedCallback(updatedDataUrlBlocked: BlockedUrlDataLocal) {
    this.blockedUrlsDict.blockedUrlData = updatedDataUrlBlocked
    chrome.runtime.sendMessage({
      type: "updateBadge",
      count: this._blockedCount,
    })
  }

  // Mark element as blocked and also increment the block count
  markElementAsBlocked(element: HTMLElement): void {
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

    const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*")

    const regex = new RegExp(`^${escapedPattern}$`)
    return regex.test(urlString)
  }

  shouldUrlBeBlocked(
    googleSearchUrl: string,
    searchCategory: searchCategories,
    origin: string
  ): boolean {
    const url = new URL(googleSearchUrl)
    for (const pattern of Object.keys(this.blockedUrlsDict.blockedUrlData)) {
      // Here we check if the pattern is an URL and if it matches the current checked URL
      if (this.isPatternUrl(url, googleSearchUrl, pattern)) {
        console.log(`Blocked URL: ${googleSearchUrl} url pattern: ${pattern} from ${origin}`)
        this.incrementBlockCount(pattern, searchCategory)
        return true
      }

      // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
      if (this.isPatternWildcard(googleSearchUrl, pattern)) {
        this.incrementBlockCount(pattern, searchCategory)
        console.log(`Blocked URL: ${url} matched pattern: ${pattern} from ${origin}`)
        return true
      }
    }
    return false
  }

  private isElementVisible(element: HTMLElement): boolean {
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
  }

  processSearchResultsForBlocking(
    queryString: string, // string we query for
    containerToSearchIn: Element, // Narrows the search
    blockInvisibleElements: boolean,
    searchCategory: searchCategories
  ) {
    const searchResults = containerToSearchIn.querySelectorAll(queryString)

    searchResults?.forEach((searchElement) => {
      searchElement.setAttribute("data-processed", "true")

      if (
        this.checkLinksForBlockedUrls(
          searchElement,
          blockInvisibleElements,
          searchCategory,
          `regular`
        ) ||
        this.checkCitesForBlockedUrls(
          searchElement,
          blockInvisibleElements,
          searchCategory,
          `regular`
        )
      ) {
        this.markElementAsBlocked(searchElement as HTMLElement)
      }
    })
  }

  checkLinksForBlockedUrls(
    searchElement: Element,
    blockInvisibleElements: boolean,
    searchCategory: searchCategories,
    origin: string
  ): boolean {
    const links = searchElement.querySelectorAll("a")
    for (const link of links) {
      if (blockInvisibleElements || this.isElementVisible(link)) {
        if (link.href && this.shouldUrlBeBlocked(link.href, searchCategory, origin)) {
          return true
        }
      }
    }
    return false
  }

  checkCitesForBlockedUrls(
    searchElement: Element,
    blockInvisibleElements: boolean,
    searchCategory: searchCategories,
    origin: string
  ): boolean {
    const cites = searchElement.querySelectorAll("cite")
    for (const cite of cites) {
      let url = cite.textContent?.split(" ")[0] // Get first text in cite (it concatenates all descendants)
      if (url) {
        // Add 'https://' if the URL doesn't start with 'http://' or 'https://'
        if (!/^https?:\/\//i.test(url)) {
          url = "https://" + url
        }

        if (blockInvisibleElements || this.isElementVisible(cite)) {
          if (this.shouldUrlBeBlocked(url, searchCategory, origin)) {
            return true
          }
        }
      }
    }
    return false
  }

  // Block invis elements as well as sometimes they load in the "all image" section before the user sees them
  processImagesForBlocking() {
    if (this.settings.blockImage) {
      const queryString: string = ".ivg-i:not([data-processed])"
      this.processSearchResultsForBlocking(queryString, this.searchResultsContainer, true, "i")
    }
  }

  // Blocks the top scrollbar of adds at the top of the product / regular / image page
  processTopAddsForBlocking() {
    if (this.settings.blockAds) {
      const queryString: string = ".mnr-c.pla-unit:not([data-processed])"
      this.processSearchResultsForBlocking(queryString, document.body, false, "i")
    }
  }

  processNewsForBlocking() {
    if (this.settings.blockNews) {
      const queryString: string = ".SoaBEf:not([data-processed])"
      this.processSearchResultsForBlocking(queryString, this.searchResultsContainer, false, "n")
    }
  }

  processVideosForBlocking() {
    if (this.settings.blockVideo) {
      const queryString: string = ".g:not([data-processed])"
      this.processSearchResultsForBlocking(queryString, this.searchResultsContainer, false, "v")
    }
  }

  processRegularForBlocking() {
    if (this.settings.blockWeb) {
      const queryString: string =
        ".g:not([data-processed]):not([data-initq]:not(.ivg-i):not(.related-question-pair)"
      this.processSearchResultsForBlocking(queryString, this.searchResultsContainer, false, "w")
    }
  }

  processRecipes() {
    if (this.settings.blockRecipe) {
      const queryString: string = ".F6H0Gb.h2UtUe:not([data-processed])"
      this.processSearchResultsForBlocking(queryString, this.searchResultsContainer, false, "w")
    }
  }
}
