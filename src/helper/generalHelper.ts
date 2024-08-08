export function formatCount(count: number): string {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M"
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K"
  }
  if (count) {
    return count.toString()
  }
  return "0"
}
