import { ScriptSettings } from "../types"

class GoogleScriptService {
  constructor(readonly scriptSettings: ScriptSettings) {
    new MutationObserver((_, obs) => {
      const search = document.querySelector("#search")
      if (search) {
        obs.disconnect()
        this.scriptStart()
      }
    }).observe(document.body, {
      childList: true,
      subtree: true,
    })
  }

  scriptStart() {
    console.log("d")
  }
}
