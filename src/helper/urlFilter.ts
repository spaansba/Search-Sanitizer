import { BlockedUrlData } from "../types"

export function createUrlFilter(initialBlockedUrls: BlockedUrlData) {
  let blockedUrls = { ...initialBlockedUrls }
  let urlsBlocked = false

  function shouldFilterLink(url: string): boolean {
    try {
      for (const pattern of Object.keys(blockedUrls)) {
        // Here we check if the pattern is an URL and if it matches the current checked URL
        if (checkIfMatchedUrl(url, pattern)) {
          console.log(`Blocked URL: ${url} matched pattern: ${pattern}`)
          blockedUrls[pattern].s++
          return true
        }

        // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
        if (matchesPattern(url, pattern)) {
          console.log(`Blocked URL: ${url} matched pattern: ${pattern}`)
          blockedUrls[pattern].s++
          return true
        }
      }
      return false
    } catch (error) {
      console.error(`Error processing ${url}:`, error)
      return false
    }
  }

  function checkIfMatchedUrl(urlString: string, pattern: string): boolean {
    try {
      const url = new URL(urlString)
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
      console.error(`Invalid URL: ${urlString}`)
      return false
    }
  }

  function removeTrailingSlash(s: string): string {
    return s.endsWith("/") ? s.slice(0, -1) : s
  }

  function matchesPattern(url: string, pattern: string): boolean {
    url = url.toLowerCase()
    pattern = pattern.toLowerCase()

    const escapedPattern = pattern
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\\\*/g, ".*")

    const regex = new RegExp(`^${escapedPattern}$`)
    return regex.test(url)
  }

  function shouldFilterResult(
    links: NodeListOf<HTMLAnchorElement>,
    cites: NodeListOf<HTMLElement>
  ): boolean {
    for (const link of links) {
      if (isElementVisible(link) && shouldFilterLink(link.href)) {
        return true
      }
    }
    for (const cite of cites) {
      if (
        cite.textContent &&
        isElementVisible(cite) &&
        shouldFilterLink(cite.textContent)
      ) {
        return true
      }
    }
    return false
  }

  function isElementVisible(element: HTMLElement): boolean {
    return !!(
      element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
    )
  }

  function getBlockedUrls() {
    return blockedUrls
  }

  function resetUrlsBlocked() {
    urlsBlocked = false
  }

  function wereUrlsBlocked() {
    return urlsBlocked
  }

  function setBlockedUrl() {
    chrome.storage.sync.set({ blockedUrlData: blockedUrls })
  }

  return {
    setBlockedUrl,
    shouldFilterResult,
    getBlockedUrls,
    resetUrlsBlocked,
    wereUrlsBlocked,
  }
}
