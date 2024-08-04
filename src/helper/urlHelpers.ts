export function isValidMatchPattern(input: string): boolean {
  const matchPatternRegex =
    /^(?:(?:\*|https?|ftp):\/\/(?:\*|(?:\*\.)?[^/*]+)(?:\/.*)?|\*:\/\/.*)$/

  return matchPatternRegex.test(input)
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

export function stringToUrl(input: string): string {
  input = input.replace(/^\.|\.$/, "") // If input starts or ends with . remove it
  if (!isValidUrl(input)) {
    return input.startsWith("http://") || input.startsWith("https://")
      ? input
      : `${input}.com`
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
