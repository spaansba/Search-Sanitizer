import React, { useContext, useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"
import OnOffSlider from "../components/onOffSlider"
import UrlInput from "../components/urlInput"
import { BlockedUrlsContext } from "../options/options"

const App: React.FC = () => {
  // Get slider changed message
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

  function openOptionsPage() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage()
    } else {
      window.open(chrome.runtime.getURL("options.html"))
    }
  }

  const handleClose = () => {
    window.close()
  }

  function addBlockedUrl(urlToAdd: string) {
    if (urlToAdd) {
      chrome.storage.sync.get(["blockedUrlData"], (result) => {
        if (result.blockedUrlData) {
          const updatedBlockedUrls = { ...result.blockedUrlData }
          updatedBlockedUrls[urlToAdd] = {
            i: 0,
            s: 0,
            v: 0,
          }

          chrome.storage.sync.set({ blockedUrlData: updatedBlockedUrls })
        }
      })
    }
  }

  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <div id="left-top-bar" className="top-bar-section">
          <img className="top-bar-icon" src="logoApp.png" alt="Broom icon" />
          <p className="header-text">Search Sanitizer</p>
        </div>
        <div id="right-top-bar" className="top-bar-section">
          <OnOffSlider id="OnOff" googleStorageKey={"extensionOnOff"} />
          <div
            onClick={openOptionsPage}
            id="settings-icon"
            className="button-hover-effect"
          >
            <img src="setting.png" alt="Settings icon" />
          </div>
        </div>
      </div>

      <div id="middle-section">
        <h1>Add new URL to block</h1>
        <UrlInput
          handleClose={handleClose}
          addBlockedUrl={addBlockedUrl}
          addCurrentUrl={true}
        ></UrlInput>
      </div>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)

export default App
