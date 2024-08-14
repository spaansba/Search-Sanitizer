// biome-ignore lint/style/useImportType: <explanation>
import React from "react"
import { useEffect, useState, createContext } from "react"
import { createRoot } from "react-dom/client"
import "./options.css"
import OnOffSlider from "../components/onOffSlider"
import type { BlockedUrlDataLocal, UserSettings } from "../types"
import CodeMirrorEditor from "../components/codeMirror/codeMirrorEditor"
import OptionBlockedCards from "../components/dashboard/optionBlockedCards"
import HelpButton from "../components/helpButton/helpButton"

export const BlockedUrlsContext = createContext<
  [BlockedUrlDataLocal, React.Dispatch<React.SetStateAction<BlockedUrlDataLocal>>]
>([{}, () => {}])

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<"settings" | "blockedSites">("blockedSites")
  const [blockedUrls, setBlockedUrls] = useState<BlockedUrlDataLocal>({})

  function setTheme(isDarkMode: boolean) {
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light")
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const section = urlParams.get("section")
    if (section === "settings" || section === "blockedSites") {
      setActiveSection(section)
    }
    chrome.storage.local.get(["blockedUrlData"], (result) => {
      if (result.blockedUrlData) {
        setBlockedUrls(result.blockedUrlData)
      }
    })

    chrome.storage.local.get(["darkMode"], (result) => {
      const darkModeEnabled = result.darkMode === true
      setTheme(darkModeEnabled)
    })
  }, [])

  // Add Section to the url, when we refresh the page on a certain header, we will remain on that page
  const setActiveSectionAndUpdateURL = (section: "settings" | "blockedSites") => {
    setActiveSection(section)
    const url = new URL(window.location.href)
    url.searchParams.set("section", section)
    window.history.pushState({}, "", url)
  }

  const generalSettings: UserSettings[] = [
    {
      settingName: "Extension on",
      googleStorageKey: "extensionOnOff",
      title: "Turn the extension on or off",
    },
    {
      settingName: "Dark mode",
      googleStorageKey: "darkMode",
      title: "Switch to dark mode",
      refreshPageOnUpdate: true,
    },
  ]

  const blockSettings: UserSettings[] = [
    {
      settingName: "Block websites",
      googleStorageKey: "blockWeb",
      title:
        "Hides entire websites from the search results, includes the <Related Questions> section ",
    },
    {
      settingName: "Block images",
      googleStorageKey: "blockImage",
      title: "Hides images from the search results",
    },
    {
      settingName: "Block videos",
      googleStorageKey: "blockVideo",
      title:
        "Hides videos in the dedicated video section in search results. Does not affect videos appearing in regular web results",
    },
    {
      settingName: "Block news",
      googleStorageKey: "blockNews",
      title:
        "Hides results in the dedicated news section in search results. Does not affect news articles appearing in regular web results",
    },
    {
      settingName: "Block recipes",
      googleStorageKey: "blockRecipe",
      title: "Hides recipes from the search results",
    },
    {
      settingName: "Block ads",
      googleStorageKey: "blockAds",
      title: "Hides adds from the search results",
    },
  ]

  // UseEffect to subscribe to slider being changed in different part of our app.
  // Aka. if the slider changes in the popup-page while the option page is open also change the slider on the option page
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

  const renderMiddleSection = () => {
    switch (activeSection) {
      case "blockedSites":
        return (
          <>
            <h2>Blocked Sites</h2>
            <div className="question-text">
              Sites can be blocked via URL or by Match Pattern
              <HelpButton helpElement={helpMatchedPattern()} />
            </div>
            <OptionBlockedCards />
            <h2>Block in bulk</h2>
            <div className="question-text">
              Easy access to remove and add sites to block in bulk via URL or by Match Pattern
              {/* <HelpButton helpElement={helpMatchedPattern()} /> */}
            </div>
            <CodeMirrorEditor />
          </>
        )
      case "settings":
        return (
          <>
            <h2 className="top-h2">General Settings</h2>
            {generalSettings.map((setting) => (
              <div
                key={setting.googleStorageKey}
                className="settings-item-container"
                title={setting.title}
              >
                <p className="setting-name">{setting.settingName}</p>

                <div className="slider">
                  <OnOffSlider id={setting.googleStorageKey} setting={setting} />
                </div>
              </div>
            ))}
            <div
              title="Join the Discord for help"
              className="settings-item-container discord-button"
              onClick={onClickDiscord}
            >
              <p>Questions? Requests? Bugs? Join the Discord.</p>
              <div className="slider">
                <svg
                  width="33px"
                  height="33px"
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
            </div>
            <h2 className="top-h2">Block Settings</h2>
            <p className="under-header">
              Google has a plethora of different result sections. Tell us where we should block
              matched URLs:
            </p>
            {blockSettings.map((setting) => (
              <div
                key={setting.googleStorageKey}
                className="settings-item-container"
                title={setting.title}
              >
                <p className="setting-name">{setting.settingName}</p>

                <div className="slider">
                  <OnOffSlider id={setting.googleStorageKey} setting={setting} />
                </div>
              </div>
            ))}
          </>
        )
    }
  }

  function onClickDiscord() {
    window.open("https://discord.gg/smt753Fwt3", "_blank")
  }

  return (
    <BlockedUrlsContext.Provider value={[blockedUrls, setBlockedUrls]}>
      <div className="card">
        <header>
          <div className="container">
            <img className="logo" src="logoApp.png" alt="logo" title="Search Sanitizer" />

            <div className="header-wrapper">
              <div
                className={`container image-offset button ${
                  activeSection === "blockedSites" ? "active" : ""
                }`}
                onClick={() => setActiveSectionAndUpdateURL("blockedSites")}
              >
                <div>Blocked Sites</div>
              </div>

              <div
                className={`container image-offset button ${
                  activeSection === "settings" ? "active" : ""
                }`}
                onClick={() => setActiveSectionAndUpdateURL("settings")}
              >
                <div>Settings</div>
              </div>
            </div>
          </div>
        </header>
        <div id="middle">{renderMiddleSection()}</div>
      </div>
    </BlockedUrlsContext.Provider>
  )
}

const helpMatchedPattern: () => React.JSX.Element = () => {
  return (
    <>
      <p>
        A match pattern is used to specify a group of URLs.
        <br />
        Here are some examples and their effects:
      </p>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Match Pattern</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Example of URLs Matched</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>*://*.temu.com/*</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ul>
                <li>https://www.temu.com/</li>
                <li>http://shop.temu.com/products</li>
                <li>https://us.temu.com/category/home</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>https://google.*</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ul>
                <li>https://google.com/</li>
                <li>https://google.nl/</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>https://*.quora.com/*</td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ul>
                <li>https://quora.com/</li>
                <li>https://es.quora.com/</li>
                <li>https://de.quora.com/topic/Science</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
