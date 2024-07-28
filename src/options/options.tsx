import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import "./options.css"
import OnOffSlider from "../components/onOffSlider"
import { UserSettings } from "../types"
import CodeMirrorEditor from "../components/codeMirrorEditor"

interface SettingsProps {
  settings: UserSettings[]
}

interface urlDataProps {
  url: string
  reason: string
  onImage: boolean
  onVideo: boolean
  onSearch: boolean
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
            <CodeMirrorEditor></CodeMirrorEditor>
            <button className="buttons" onClick={addNEw}></button>
          </>
        )
    }
  }

  function addNEw() {
    const urlDataList: urlDataProps = {
      url: "www.youtube.com",
      reason: "example",
      onImage: true,
      onVideo: true,
      onSearch: true,
    }
    chrome.storage.sync.set({ urlDataList: urlDataList }, function () {
      console.log("URL data saved")
    })
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
