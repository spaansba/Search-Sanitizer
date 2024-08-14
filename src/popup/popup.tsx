import React, { useState } from "react"
import { useEffect } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"
import OnOffSlider from "../components/onOffSlider"
import UrlInput from "../components/urlInput"
import type { blockCategories, UserSettings } from "../types"
import BlockedSvgContainer from "../components/dashboard/blockedSvgContainer"
import { transformUserInputToValidURL } from "../helper/urlHelpers"

const App: React.FC = () => {
  const [lifeTimeBlocks, setLifeTimeBlocks] = useState<blockCategories>({ w: 0, i: 0, v: 0, n: 0 })

  function setTheme(isDarkMode: boolean) {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light")
  }

  // Set lifeTimeBlocks
  useEffect(() => {
    chrome.storage.local.get(["lifetimeTotalBlocks"], (result) => {
      setLifeTimeBlocks(result.lifetimeTotalBlocks)
    })
    chrome.storage.local.get(["darkMode"], (result) => {
      const darkModeEnabled = result.darkMode === true
      setTheme(darkModeEnabled)
    })
  }, [])

  // Get slider changed message
  useEffect(() => {
    const messageListener = (message: { type: string; key: any }) => {
      if (message.type === "SLIDER_CHANGED") {
        chrome.storage.local.get([message.key], (_result) => {})
      }
    }
    chrome.runtime.onMessage.addListener(messageListener)
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
    }
  }, [])

  function openOptionsPage() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage(() => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0]
          if (tab.id) {
            chrome.tabs.sendMessage(tab.id, { type: "SET_ACTIVE_SECTION", section: "settings" })
          }
        })
      })
    } else {
      window.open(chrome.runtime.getURL("options.html?section=settings"))
    }
  }

  const handleClose = () => {
    window.close()
  }

  function addBlockedUrl(urlToAdd: string) {
    urlToAdd = transformUserInputToValidURL(urlToAdd)
    chrome.storage.local.get(["blockedUrlData"], (result) => {
      if (result.blockedUrlData) {
        const updatedBlockedUrls = { ...result.blockedUrlData }
        updatedBlockedUrls[urlToAdd] = {
          i: 0,
          w: 0,
          v: 0,
          n: 0,
        }
        chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls })
      }
    })
  }

  function onClickDiscord() {
    window.open("https://discord.gg/smt753Fwt3", "_blank")
  }

  const ExtensionOnOffSetting: UserSettings = {
    settingName: "Extension on",
    googleStorageKey: "extensionOnOff",
    title: "Turn extension off/on",
  }

  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <img
          className="top-bar-icon top-item"
          src="logoApp.png"
          alt="Broom icon"
          title="Search Sanitizer"
        />
        <div className="top-item">
          <OnOffSlider id="OnOff" setting={ExtensionOnOffSetting} />
        </div>

        <div
          title="Join the Discord for help"
          className="dicord-button top-item"
          onClick={onClickDiscord}
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 -28.5 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="#5865F2"
              ></path>
            </g>
          </svg>
        </div>
        <div onClick={openOptionsPage} id="settings-icon" className="button-hover-effect top-item">
          <img src="setting.png" alt="Settings icon" />
        </div>
      </div>

      <div id="middle-section">
        <div className="block-url-header-container">
          <h1>Block URL</h1>
          <p onClick={openOptionsPage} className="add-in-bulk-link">
            add in bulk
          </p>
        </div>
        <UrlInput handleClose={handleClose} addBlockedUrl={addBlockedUrl} />
      </div>
      <div id="bottom-section">
        <BlockedSvgContainer
          lifeTimeBlocks={{
            i: lifeTimeBlocks.i,
            n: lifeTimeBlocks.n,
            v: lifeTimeBlocks.v,
            w: lifeTimeBlocks.w,
          }}
          addLifeTimeText={true}
        ></BlockedSvgContainer>
      </div>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)

export default App
