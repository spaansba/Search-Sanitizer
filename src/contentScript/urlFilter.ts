import { BlockedUrlData } from "../types"

export function createUrlFilter(initialBlockedUrls: BlockedUrlData) {
  let blockedUrls = { ...initialBlockedUrls }
  let urlsBlocked = false

  function shouldFilterLink(url: string): boolean {
    try {
      for (const pattern of Object.keys(blockedUrls)) {
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

  function matchesPattern(hostname: string, pattern: string): boolean {
    hostname = hostname.toLowerCase()
    pattern = pattern.toLowerCase()

    const escapedPattern = pattern
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\\\*/g, ".*")

    const regex = new RegExp(`^${escapedPattern}$`)
    return regex.test(hostname)
  }

  function shouldFilterResult(
    links: NodeListOf<HTMLAnchorElement>,
    cites: NodeListOf<HTMLElement>
  ): boolean {
    for (const link of links) {
      if (shouldFilterLink(link.href)) {
        return true
      }
    }
    for (const cite of cites) {
      if (cite.textContent && shouldFilterLink(cite.textContent)) {
        return true
      }
    }
    return false
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
