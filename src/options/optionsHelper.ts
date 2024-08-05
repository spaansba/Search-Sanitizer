import { UserSettings } from "../types"

// Define the shape of our options state
export interface OptionsState {
  [key: string]: boolean
}

// Define our settings
export const allSettings: UserSettings[] = [
  {
    settingName: "Extension on",
    googleStorageKey: "extensionOnOff",
  },
  {
    settingName: "Show a clean block page instead of funny images",
    googleStorageKey: "testKey2",
  },
]

export function updateOption(
  googleStorageKey: string,
  newValue: boolean
): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set({ [googleStorageKey]: newValue }, () => {
      if (chrome.runtime.lastError) {
        console.error(
          `Error setting ${googleStorageKey}:`,
          chrome.runtime.lastError
        )
        reject(chrome.runtime.lastError)
      } else {
        resolve()
      }
    })
  })
}

export function getStorageItem<T>(key: string): Promise<T | undefined> {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], (result) => {
      console.log(`Value for ${key}:`, result[key])
      resolve(result[key] as T | undefined)
    })
  })
}

export async function initializeOptionsState(): Promise<OptionsState> {
  const state: OptionsState = {}
  for (const setting of allSettings) {
    const value = await getStorageItem<boolean>(setting.googleStorageKey)
    state[setting.googleStorageKey] = value ?? false
  }
  console.log("Initialized options state:", state)
  return state
}

export function getEntireSyncStorage(): Promise<{ [key: string]: any }> {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (items) => {
      if (chrome.runtime.lastError) {
        console.error("Error fetching sync storage:", chrome.runtime.lastError)
        reject(chrome.runtime.lastError)
      } else {
        console.log("Entire sync storage:", items)
        resolve(items)
      }
    })
  })
}
