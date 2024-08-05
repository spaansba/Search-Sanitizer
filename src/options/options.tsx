import React, { useEffect, useState, createContext } from "react"
import { createRoot } from "react-dom/client"
import "./options.css"
import OnOffSlider from "../components/onOffSlider"
import { BlockedUrlData, UserSettings } from "../types"
import CodeMirrorEditor from "../components/codeMirrorEditor/codeMirrorEditor"
import OptionBlockedCards from "../components/dashboard/optionBlockedCards"
import HelpButton from "../components/helpButton/helpButton"

interface SettingsProps {
  settings: UserSettings[]
}

export const BlockedUrlsContext = createContext<
  [BlockedUrlData, React.Dispatch<React.SetStateAction<BlockedUrlData>>]
>([{}, () => {}])

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    "settings" | "blockedSites"
  >("blockedSites")
  const [blockedUrls, setBlockedUrls] = useState<BlockedUrlData>({})

  useEffect(() => {
    chrome.storage.sync.get(["blockedUrlData"], (result) => {
      console.log("Retrieved from storage:", result.blockedUrlData)
      if (result.blockedUrlData) {
        setBlockedUrls(result.blockedUrlData)
      }
    })
  }, [])

  const allSettings: SettingsProps = {
    settings: [
      {
        settingName: "Extension on",
        googleStorageKey: "extensionOnOff",
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
      case "blockedSites":
        return (
          <>
            <h2>Blocked Sites</h2>
            <div className="question-text">
              Sites can be blocked via URL or by Match Pattern
              <HelpButton helpElement={helpMatchedPattern()}></HelpButton>
            </div>
            <OptionBlockedCards></OptionBlockedCards>
            <h2>Block in bulk</h2>
            <div className="question-text">
              Easy access to remove and add sites to block in bulk via URL or by
              Match Pattern
              <HelpButton helpElement={helpMatchedPattern()}></HelpButton>
            </div>
            <CodeMirrorEditor></CodeMirrorEditor>
          </>
        )
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
    }
  }

  return (
    <BlockedUrlsContext.Provider value={[blockedUrls, setBlockedUrls]}>
      <div className="card">
        <header>
          <div className="container">
            <img className="logo" src="logoApp.png" alt="logo" />
            <div className="header-wrapper">
              <div
                className={`container image-offset button ${
                  activeSection === "blockedSites" ? "active" : ""
                }`}
                onClick={() => setActiveSection("blockedSites")}
              >
                <div>Blocked Sites</div>
              </div>

              <div
                className={`container image-offset button ${
                  activeSection === "settings" ? "active" : ""
                }`}
                onClick={() => setActiveSection("settings")}
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
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Match Pattern
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Example of URLs Matched
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              *://*.temu.com/*
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ul>
                <li>https://www.temu.com/</li>
                <li>http://shop.temu.com/products</li>
                <li>https://us.temu.com/category/home</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              https://google.*
            </td>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              <ul>
                <li>https://google.com/</li>
                <li>https://google.nl/</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid black", padding: "8px" }}>
              https://*.quora.com/*
            </td>
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
