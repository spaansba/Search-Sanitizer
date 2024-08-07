import type { BlockedCountManager } from "."
import type { BlockedUrlData } from "../types"
import { getResultsHidden, updateBlockedCount } from "../components/topPage"
import { isElementVisible } from "./googleHelper"

export default function googleSearchRegular(
  blockedUrlsDict: BlockedUrlData,
  blockedCountManager: BlockedCountManager,
  searchElement: Element
) {
  const processedResults = new Set()
  new MutationObserver(() => {
    filterNormalSearch(searchElement)
    setTimeout(() => filterRelatedQuestions(searchElement), 500) //TODO fix need for 500 timeout
  }).observe(searchElement, {
    childList: true,
    subtree: true,
  })

  function filterNormalSearch(search: Element) {
    const searchResults = search.querySelectorAll(
      ".g:not([data-processed]):not([data-initq] *)"
    )

    searchResults.forEach((result) => {
      if (processedResults.has(result)) {
        return
      }
      processedResults.add(result)
      result.setAttribute("data-processed", "true")

      const links = result.querySelectorAll("a")
      const cites = result.querySelectorAll("cite")

      for (const link of links) {
        if (
          link.href &&
          shouldFilterLink(link.href, blockedUrlsDict) &&
          isElementVisible(link)
        ) {
          addCardShow(result as HTMLElement)
          return
        }
      }

      for (const cite of cites) {
        if (
          cite.textContent &&
          shouldFilterLink(cite.textContent, blockedUrlsDict) &&
          isElementVisible(cite)
        ) {
          addCardShow(result as HTMLElement)
          return
        }
      }
    })
  }

  function filterRelatedQuestions(search: Element) {
    const moreToAskSections = search.querySelectorAll("[data-initq]")
    moreToAskSections.forEach((askSection) => {
      askSection.setAttribute("data-processed", "true")
      const relatedQuestions = askSection.querySelectorAll(
        ".related-question-pair:not([data-processed])"
      )
      relatedQuestions.forEach((relatedQuestion) => {
        if (processedResults.has(relatedQuestion)) {
          return
        }
        processedResults.add(relatedQuestion)
        relatedQuestion.setAttribute("data-processed", "true")
        const links = relatedQuestion.querySelectorAll("a")
        const cites = relatedQuestion.querySelectorAll("cite")

        for (const link of links) {
          if (shouldFilterLink(link.href, blockedUrlsDict)) {
            addCardShow(relatedQuestion as HTMLElement)
            return
          }
        }

        for (const cite of cites) {
          if (
            cite.textContent &&
            shouldFilterLink(cite.textContent, blockedUrlsDict)
          ) {
            addCardShow(relatedQuestion as HTMLElement)
            return
          }
        }
      })
    })
  }
  function addCardShow(element: HTMLElement) {
    blockedCountManager.incrementBlockedCount()
    updateBlockedCount(blockedCountManager.getBlockedCount())
    element.setAttribute("card-show", getResultsHidden().toString())
    element.setAttribute("card-relevant", "true")
  }
}

// url filter functions ///////////////

export function shouldFilterLink(
  urlString: string,
  blockedUrls: BlockedUrlData
): boolean {
  try {
    const url = new URL(urlString)
    for (const pattern of Object.keys(blockedUrls.blockedUrlData)) {
      // Here we check if the pattern is an URL and if it matches the current checked URL
      if (checkIfMatchedUrl(url, urlString, pattern)) {
        console.log(`Blocked URL: ${urlString} matched pattern: ${pattern}`)
        blockedUrls.blockedUrlData[pattern].s++
        return true
      }

      // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
      if (matchesPattern(urlString, pattern)) {
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

function checkIfMatchedUrl(
  url: URL,
  urlString: string,
  pattern: string
): boolean {
  try {
    if (!pattern) {
      debugger
      console.log("not")
      return
    }
    pattern = removeTrailingSlash(pattern.toLowerCase())

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
      removeTrailingSlash(url.href.toLowerCase()),
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

function removeTrailingSlash(s: string): string {
  return s.endsWith("/") ? s.slice(0, -1) : s
}

function matchesPattern(urlString: string, pattern: string): boolean {
  urlString = urlString.toLowerCase()
  pattern = pattern.toLowerCase()

  const escapedPattern = pattern
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/\\\*/g, ".*")

  const regex = new RegExp(`^${escapedPattern}$`)
  return regex.test(urlString)
}
