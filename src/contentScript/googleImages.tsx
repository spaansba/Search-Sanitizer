import { BlockedCountManager } from "."
import { BlockedUrlData } from "../types"
import { isElementVisible } from "./googleHelper"
import { shouldFilterLink } from "./googleRegular"

export default function googleSearchImages(
  blockedUrlsDict: BlockedUrlData,
  blockedCountManager: BlockedCountManager,
  searchElement: Element
) {
  const processedResults = new Set()
  new MutationObserver(() => {
    filterImageResults(searchElement)
  }).observe(searchElement, {
    childList: true,
    subtree: true,
  })

  function filterImageResults(search: Element) {
    const searchResults = search.querySelectorAll(
      ".ivg-i:not([data-processed]):not([data-initq] *)"
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
          console.log("yes")
          addCardShow(result as HTMLElement)
          return
        }
      }

      for (const cite of cites) {
        console.log(cite)
        if (
          cite.textContent &&
          shouldFilterLink(cite.textContent, blockedUrlsDict) &&
          isElementVisible(cite)
        ) {
          console.log("yes")
          addCardShow(result as HTMLElement)
          return
        }
      }
    })
  }
  function addCardShow(element: HTMLElement) {
    blockedCountManager.incrementBlockedCount()
    // updateBlockedCount(blockedCountManager.getBlockedCount())
    element.setAttribute("card-show", "true")
    element.setAttribute("card-relevant", "true")
  }
}
