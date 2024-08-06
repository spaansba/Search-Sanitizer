import type { BlockedUrlData } from "../types"

export default function shouldFilterResult(
  links: NodeListOf<HTMLAnchorElement>,
  cites: NodeListOf<HTMLElement>,
  blockedUrls: BlockedUrlData
): boolean {
  for (const link of links) {
    if (isElementVisible(link) && shouldFilterLink(link.href, blockedUrls)) {
      return true
    }
  }

  for (const cite of cites) {
    if (
      cite.textContent &&
      isElementVisible(cite) &&
      shouldFilterLink(cite.textContent, blockedUrls)
    ) {
      return true
    }
  }
  return false
}

function shouldFilterLink(
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

function isElementVisible(element: HTMLElement): boolean {
  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  )
}
