import React, { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"
import "../shared.css"
import OnOffSlider from "../components/onOffSlider"
import {
  isValidMatchPattern,
  isValidUrl,
  stringToMatchPattern,
  stringToUrl,
} from "../helper/urlHelpers"

const App: React.FC = () => {
  const [inputIsValid, setInputIsValid] = useState<boolean>()
  const urlInput = useRef<HTMLInputElement>(null)
  const [inputAlternatives, setInputAlternatives] = useState<string[]>([])
  const [tabUrl, setTabUrl] = useState<URL>()
  const [inputValue, setInputValue] = useState<string>("")

  // Get the opened tab to backfill the input value
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0] && tabs[0].url) {
        const newTabUrl = new URL(tabs[0].url)
        setTabUrl(newTabUrl)
        setInputValue(newTabUrl.hostname)
        setInputAlternatives(getUrlAlternatives())
      }
    })
  }, [])

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

  useEffect(() => {
    console.log("now " + inputIsValid + " " + inputValue)
  }, [inputIsValid])

  useEffect(() => {
    if (tabUrl) {
      urlInput.current.value = tabUrl.hostname
      setInputAlternatives(getUrlAlternatives())
      urlInput.current.focus()
    }
  }, [tabUrl])

  useEffect(() => {
    setInputAlternatives(getUrlAlternatives)
    setInputIsValid(isValidMatchPattern(inputValue) || isValidUrl(inputValue))
  }, [inputValue])

  function openOptionsPage() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage()
    } else {
      window.open(chrome.runtime.getURL("options.html"))
    }
  }

  function getUrlAlternatives(): string[] {
    let alternatives: string[] = []
    if (inputValue) {
      alternatives.push(stringToMatchPattern(inputValue))
      if (!isValidMatchPattern(inputValue)) {
        // dont turn match pattern into url
        alternatives.push(stringToUrl(inputValue))
      }
    }
    if (tabUrl) {
      alternatives.push(stringToMatchPattern(tabUrl.hostname))
      if (tabUrl.hostname != inputValue) {
        alternatives.push(tabUrl.hostname)
      }
    }

    // Remove duplicates and filter some inputs
    return [...new Set(alternatives)].filter(
      (alt) => alt !== "*://*.*://*.*" && alt !== inputValue
    )
  }

  const handleInputChange = () => {
    if (inputValue == urlInput.current.value) {
      return
    }
    setInputValue(urlInput.current.value.trim())
  }

  const handleAddNewUrl = () => {
    if (!inputIsValid) {
      return
    }
    const urlToAdd = urlInput.current.value

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
    handleClose()
  }

  function onHandleAlternative(Alternative: string) {
    setInputValue(Alternative.trim())
    urlInput.current.value = Alternative
  }

  const handleClose = () => {
    window.close()
  }

  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <div id="left-top-bar" className="top-bar-section">
          <img className="top-bar-icon" src="logoApp.png" alt="Broom icon" />
          <p className="header-text">Search Sanitizer</p>
        </div>
        <div id="right-top-bar" className="top-bar-section">
          <OnOffSlider id="OnOff" googleStorageKey={"ExtensionOnOff"} />
          <div
            onClick={openOptionsPage}
            id="settings-icon"
            className="button-hover-effect"
          >
            <img src="setting.png" alt="Settings icon" />
          </div>
        </div>
      </div>

      <div id="middle-section" className="scrollable-section">
        <h1>Add new URL to block</h1>

        <div className="button-wrapper">
          <button
            disabled={!inputIsValid}
            onClick={handleAddNewUrl}
            className={`url-button add ${!inputIsValid ? "disabled" : ""}`}
            title={
              !inputIsValid ? "Please enter a valid URL or match pattern" : ""
            }
          >
            Add
          </button>
          <button onClick={handleClose} className="url-button cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)

export default App
