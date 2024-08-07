import { BlockedUrlDataLocal } from "../types"

export class BlockedCountUpdateManager {
  // Stores the count updates before they're committed to storage
  private countUpdates: BlockedUrlDataLocal = {}
  private lifetimeTotalBlocks: number = 0
  private debouncedBatchUpdate: () => void

  constructor(
    // The current blocked URL data
    private blockedUrlsDict: { blockedUrlData: BlockedUrlDataLocal },
    // Callback to update the parent component's state
    private updateCallback: (updatedData: BlockedUrlDataLocal, lifetimeTotal: number) => void
  ) {
    // Initialize the debounced update function
    this.debouncedBatchUpdate = this.debounce(() => this.batchUpdateCounts(), 1000) // 1 second
    // Ensure updates are saved when the page is closed
    window.addEventListener("beforeunload", () => this.batchUpdateCounts())
    // Load the lifetime total blocks count
    this.loadLifetimeTotalBlocks()
  }

  // Load the lifetime total blocks count from storage
  private async loadLifetimeTotalBlocks() {
    try {
      const result = await chrome.storage.local.get("lifetimeTotalBlocks")
      this.lifetimeTotalBlocks = result.lifetimeTotalBlocks || 0
    } catch (error) {
      console.error("Failed to load lifetime total blocks:", error)
    }
  }

  // Increment the count for a specific URL and search type
  incrementCount(pattern: string, searchType: "w" | "i" | "v" | "n") {
    if (!this.countUpdates[pattern]) {
      this.countUpdates[pattern] = { w: 0, i: 0, v: 0, n: 0 }
    }
    this.countUpdates[pattern][searchType]++
    this.lifetimeTotalBlocks++
    this.debouncedBatchUpdate()
  }

  // Update the blocked URL data in storage and notify the parent component
  private async batchUpdateCounts() {
    if (Object.keys(this.countUpdates).length === 0) return

    const updatedBlockedUrlData = { ...this.blockedUrlsDict.blockedUrlData }

    // Merge the count updates into the current data
    for (const [url, counts] of Object.entries(this.countUpdates)) {
      if (!updatedBlockedUrlData[url]) {
        updatedBlockedUrlData[url] = { w: 0, i: 0, v: 0, n: 0 }
      }
      for (const type of ["w", "i", "v", "n"] as const) {
        updatedBlockedUrlData[url][type] += counts[type]
      }
    }

    try {
      // Update the storage with both blockedUrlData and lifetimeTotalBlocks
      await chrome.storage.local.set({
        blockedUrlData: updatedBlockedUrlData,
        lifetimeTotalBlocks: this.lifetimeTotalBlocks,
      })
      // Notify the parent component
      this.updateCallback(updatedBlockedUrlData, this.lifetimeTotalBlocks)
      // Clear the accumulated updates
      this.countUpdates = {}
    } catch (error) {
      console.error("Failed to update blocked URL data:", error)
    }
  }

  // Debounce function to limit the frequency of updates
  private debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | undefined
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }
}
