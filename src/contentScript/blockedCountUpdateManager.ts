import { blockCategories, BlockedUrlDataLocal, searchCategories } from "../types"

export class BlockedCountUpdateManager {
  private countUpdates: BlockedUrlDataLocal = {}
  private lifetimeBlocks: blockCategories = { w: 0, i: 0, v: 0, n: 0 }
  private debouncedBatchUpdate: () => void

  constructor(
    private blockedUrlsDict: { blockedUrlData: BlockedUrlDataLocal },
    lifetimeBlocks: blockCategories,
    private updateCallback: (updatedData: BlockedUrlDataLocal) => void
  ) {
    this.lifetimeBlocks = lifetimeBlocks
    this.debouncedBatchUpdate = this.debounce(() => this.batchUpdateCounts(), 1000)
    window.addEventListener("beforeunload", () => this.batchUpdateCounts())
  }

  incrementCount(userPattern: string, searchType: searchCategories) {
    if (!this.countUpdates[userPattern]) {
      this.countUpdates[userPattern] = { w: 0, i: 0, v: 0, n: 0 }
    }
    this.countUpdates[userPattern][searchType]++
    this.debouncedBatchUpdate()
  }

  private async batchUpdateCounts() {
    if (Object.keys(this.countUpdates).length === 0) return

    const updatedBlockedUrlData = { ...this.blockedUrlsDict.blockedUrlData }
    const updatedLifeTimeBlocks = { ...this.lifetimeBlocks }
    for (const [url, counts] of Object.entries(this.countUpdates)) {
      if (!updatedBlockedUrlData[url]) {
        updatedBlockedUrlData[url] = { w: 0, i: 0, v: 0, n: 0 }
      }
      for (const type of ["w", "i", "v", "n"] as const) {
        updatedBlockedUrlData[url][type] += counts[type]
        updatedLifeTimeBlocks[type] += counts[type]
      }
    }

    try {
      // Update both blockedUrlData and lifetimeTotalBlocks in storage
      await chrome.storage.local.set({
        blockedUrlData: updatedBlockedUrlData,
        lifetimeTotalBlocks: updatedLifeTimeBlocks,
      })

      this.updateCallback(updatedBlockedUrlData)

      // Clear the accumulated updates
      this.countUpdates = {}
    } catch (error) {
      console.error("Failed to update blocked URL data:", error)
    }
  }

  private debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | undefined
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }
}
