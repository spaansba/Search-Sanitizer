export function parseString(string: string): string {
  return string
}

export function parseRegExp(regExp: string): {
  pattern: string
  flags: string
} {
  const patternEnd = regExp.lastIndexOf("/")
  const pattern = regExp.slice(1, patternEnd)
  const flags = regExp.slice(patternEnd + 1)
  new RegExp(pattern, flags)
  return { pattern, flags }
}
