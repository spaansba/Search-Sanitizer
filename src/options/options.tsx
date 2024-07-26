import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import "./options.css"
import OnOffSlider from "../components/onOffSlider"
import { UserSettings } from "../types"
import {
  updateOption,
  getStorageItem,
  getEntireSyncStorage,
} from "./optionsHelper"

interface SettingsProps {
  settings: UserSettings[]
}

const App: React.FC<{}> = () => {
  const [activeSection, setActiveSection] = useState<
    "settings" | "blockedSites"
  >("settings")

  const allSettings: SettingsProps = {
    settings: [
      {
        settingName: "Extension on",
        googleStorageKey: "ExtensionOnOFf",
      },
      {
        settingName: "Show a clean block page instead of funny images",
        googleStorageKey: "testKey2",
      },
    ],
  }

  async function getValue(googleStorageKey: string) {
    console.log(googleStorageKey)
    const boolOption = await getStorageItem<boolean>(googleStorageKey)
    console.log(boolOption)
  }

  const renderMiddleSection = () => {
    switch (activeSection) {
      case "settings":
        return (
          <>
            <h2>General Settings</h2>
            {allSettings.settings.map((setting, index) => (
              <div key={index} className="settings-item-container">
                <p>{setting.settingName}</p>
                <div className="slider">
                  <OnOffSlider
                    id={index.toString()}
                    googleStorageKey={setting.googleStorageKey}
                  />
                </div>
                <button onClick={() => getValue("ExtensionOnOFf")}></button>
              </div>
            ))}
          </>
        )
      case "blockedSites":
        return (
          <>
            <h2>Blocked Sites</h2>
            {/* Add your blocked sites content here */}
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
              className={`container image-offset ${
                activeSection === "settings" ? "active" : ""
              }`}
              onClick={() => setActiveSection("settings")}
            >
              <div>Settings</div>
            </div>
            <div
              className={`container image-offset ${
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
