// When we enter a blocked site via popup or option page do the following:
// if "www." then replace it with "*://*."
// if doesnt start with http and is not a valid match pattern than add "*://*."
export function transformUserInputToValidURL(input: string): string {
  if (!input) return input
  const matchPattern = "*://*."
  if (input.startsWith("www.")) {
    input = input.replace("www.", "")
    return matchPattern + input
  } else {
    if (!input.startsWith("http") && !isValidMatchPattern(input)) {
      return matchPattern + input
    }
  }
  return input
}

// valid urls should be:
// https://www.reddit.com
// https://.reddit.com
// www.reddit.com
// reddit.com
// http://www.reddit.com
// http://reddit.com

export function isValidUrl(input: string): boolean {
  const urlRegex =
    /^(www\.[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?:\/.*)?|[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?:\/.*)?|https:\/\/www\.[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?:\/.*)?|https?:\/\/[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+(?:\/.*)?|file:\/\/\/.*)$/
  return urlRegex.test(input)
}

export function isValidMatchPattern(input: string): boolean {
  const matchPatternRegex = /^(?:(?:\*|https?|ftp):\/\/(?:\*|(?:\*\.)?[^/*]+)(?:\/.*)?|\*:\/\/.*)$/
  return matchPatternRegex.test(input)
}

export function stringToUrl(input: string): string {
  input = input.replace(/^\.|\.$/, "") // If input starts or ends with . remove it
  if (!isValidUrl(input)) {
    return input.startsWith("http") && !isValidMatchPattern(input) ? input : `*://*.${input}.com`
  } else {
    return `${input}`
  }
}

export function stringToMatchPattern(input: string): string {
  input = input.replace(/^(https?:\/\/)?(www\.)?/, "")
  const parts = input.split(".")

  if (parts.length > 1) {
    // If it's a domain-like string, create a match pattern
    return `*://*.${parts[0]}.*`
  } else {
    // If it's just text, treat it as a domain name
    return `*://*.${input}.*`
  }
}

function removeTrailingSlash(s: string): string {
  return s.endsWith("/") ? s.slice(0, -1) : s
}

export function isPatternUrl(url: URL, urlString: string, pattern: string): boolean {
  try {
    if (!pattern) {
      return false
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

export function isPatternWildcard(urlString: string, pattern: string): boolean {
  urlString = urlString.toLowerCase()
  pattern = pattern.toLowerCase()

  const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*")

  const regex = new RegExp(`^${escapedPattern}(/.*)?$`)
  return regex.test(urlString)
}
