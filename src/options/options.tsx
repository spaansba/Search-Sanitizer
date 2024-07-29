import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import "./options.css"
import OnOffSlider from "../components/onOffSlider"
import { UserSettings } from "../types"
import CodeMirrorEditor from "../components/codeMirrorEditor/codeMirrorEditor"
import OptionBlockedCards from "../components/dashboard/optionBlockedCards"

interface SettingsProps {
  settings: UserSettings[]
}

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "settings" | "blockedSites"
  >("blockedSites")

  const allSettings: SettingsProps = {
    settings: [
      {
        settingName: "Extension on",
        googleStorageKey: "ExtensionOnOff",
      },
      {
        settingName: "Show a clean block page instead of funny images",
        googleStorageKey: "testKey2",
      },
    ],
  }

  // UseEffect to subscribe to slider being changed in different part of our app.
  // Aka. if the slider changes in the popup-page while the option page is open also change the slider on the option page
  useEffect(() => {
    const messageListener = (message: any) => {
      if (message.type === "SLIDER_CHANGED") {
        chrome.storage.sync.get([message.key], (result) => {
          console.log(`Slider ${message.key} changed to ${result[message.key]}`)
        })
      }
    }
    chrome.runtime.onMessage.addListener(messageListener)
    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
    }
  }, [])

  const renderMiddleSection = () => {
    switch (activeSection) {
      case "settings":
        return (
          <>
            <h2 className="top-h2">General Settings</h2>
            {allSettings.settings.map((setting, index) => (
              <div key={index} className="settings-item-container">
                <p>{setting.settingName}</p>
                <div className="slider">
                  <OnOffSlider
                    id={index.toString()}
                    googleStorageKey={setting.googleStorageKey}
                  />
                </div>
              </div>
            ))}
          </>
        )
      case "blockedSites":
        return (
          <>
            <h2>Blocked Sites</h2>
            <OptionBlockedCards></OptionBlockedCards>
            <ul className="no-bullets">
              <li>
                We use match patterns to filter sites blocked from appearing on
                Google Search Results
              </li>
              <li>Example: *://*.youtube.com/*</li>
              <li>Example: *://*.wikipedia./*</li>
            </ul>
            <CodeMirrorEditor></CodeMirrorEditor>
          </>
        )
    }
  }

  return (
    <div className="card">
      <header>
        <div className="container">
          <img src="broom.png" alt="logo" />
          <div className="header-wrapper">
            <div
              className={`container image-offset button ${
                activeSection === "settings" ? "active" : ""
              }`}
              onClick={() => setActiveSection("settings")}
            >
              <div>Settings</div>
            </div>

            <div
              className={`container image-offset button ${
                activeSection === "blockedSites" ? "active" : ""
              }`}
              onClick={() => setActiveSection("blockedSites")}
            >
              <div>Blocked Sites</div>
            </div>
          </div>
        </div>
      </header>
      <div id="middle">{renderMiddleSection()}</div>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
