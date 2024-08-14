import { isPatternUrl, isPatternWildcard } from "./urlHelpers"

describe("isPatternUrl", () => {
  test("matches exact URL", () => {
    expect(isPatternUrl(new URL("https://example.com"), "https://example.com", "example.com")).toBe(
      true
    )
  })

  test("matches URL with www", () => {
    expect(
      isPatternUrl(new URL("https://www.example.com"), "https://www.example.com", "example.com")
    ).toBe(true)
  })

  test("does not match different domain", () => {
    expect(isPatternUrl(new URL("https://example.org"), "https://example.org", "example.com")).toBe(
      false
    )
  })
})

describe("isPatternWildcard", () => {
  test("matches wildcard pattern", () => {
    expect(isPatternWildcard("https://www.example.com", "*://*.example.com")).toBe(true)
  })
  test("matches wildcard pattern with path", () => {
    expect(isPatternWildcard("https://www.example.com/path", "*://*.example.com")).toBe(true)
  })
  test("matches .*", () => {
    expect(isPatternWildcard("https://www.example.org", "*://*.example.*")).toBe(true)
  })
  test("does not match different domain", () => {
    expect(isPatternWildcard("https://www.example.org", "*://*.example.com")).toBe(false)
  })
  test("does not match different domain with *", () => {
    expect(isPatternWildcard("https://www.example.org", "*://*.example.com*")).toBe(false)
  })
})
