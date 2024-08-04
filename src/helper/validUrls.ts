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
