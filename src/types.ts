export type UserSettings = {
  settingName: string
  googleStorageKey: string
}

export type BlockedSites = {
  id: number
  icon: string
  url: string
}

///
//w = web
// i = image
// v = video
// n = news
export type BlockedUrlData = {
  [url: string]: {
    w: number
    i: number
    v: number
    n: number
  }
}

export type ScriptSettings = {}
