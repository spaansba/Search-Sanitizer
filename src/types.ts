export type UserSettings = {
  settingName: string
  googleStorageKey: string
  title: string
  refreshPageOnUpdate?: boolean
}

///
//w = web
// i = image
// v = video
// n = news
export type blockCategories = { i: number; n: number; v: number; w: number }
export type BlockedUrlDataLocal = {
  [url: string]: blockCategories
}

export type searchCategories = "w" | "i" | "v" | "n"

export type ScriptSettings = {}
