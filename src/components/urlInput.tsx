import React, { useEffect, useRef, useState } from "react"
import {
  isValidMatchPattern,
  isValidUrl,
  stringToMatchPattern,
  stringToUrl,
} from "../helper/urlHelpers"
import "./urlInput.css"

interface UrlInputProps {
  handleClose: () => void
  addBlockedUrl: (url: string) => void
}

export default function UrlInput({ handleClose, addBlockedUrl }: UrlInputProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const urlInput = useRef<HTMLInputElement>(null)
  const [tabUrl, setTabUrl] = useState<URL>()
  const [inputAlternatives, setInputAlternatives] = useState<string[]>([])
  const [inputIsValid, setInputIsValid] = useState<boolean>()
  const addButton = useRef<HTMLButtonElement>(null)

  function onHandleAlternative(Alternative: string) {
    if (!urlInput.current) {
      return
    }
    setInputValue(Alternative.trim())
    urlInput.current.value = Alternative
    urlInput.current.focus()
  }

  useEffect(() => {
    if (!tabUrl || !urlInput.current) {
      return
    }
    urlInput.current.value = tabUrl.hostname
    setInputAlternatives(getUrlAlternatives())
    urlInput.current.focus()
  }, [tabUrl])

  useEffect(() => {
    setInputAlternatives(getUrlAlternatives)
    setInputIsValid(isValidMatchPattern(inputValue) || isValidUrl(inputValue))
  }, [inputValue])

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        const newTabUrl: URL = new URL(tabs[0].url)

        // Check if the URL is from Google and if the protocol is an actual website, if so dont add it to the preview
        if (!newTabUrl.hostname.includes("google") && newTabUrl.protocol.includes("http")) {
          setTabUrl(newTabUrl)
          setInputValue(newTabUrl.hostname)
          setInputAlternatives(getUrlAlternatives())
        }
        if (urlInput.current) {
          urlInput.current.focus()
        }
      }
    })
  }, [])

  const handleAddNewUrl = () => {
    if (inputIsValid) {
      addBlockedUrl(inputValue)
      handleCloseAndClear()
    }
  }

  const handleInputChange = () => {
    if (!urlInput.current) {
      return
    }
    if (inputValue === urlInput.current.value) {
      return
    }
    setInputValue(urlInput.current.value.trim())
  }

  const handleCloseAndClear = () => {
    setInputValue("")
    if (urlInput.current) {
      urlInput.current.value = ""
    }
    handleClose()
  }

  function getUrlAlternatives(): string[] {
    const alternatives: string[] = []
    if (inputValue) {
      alternatives.push(stringToMatchPattern(inputValue))
      if (!isValidMatchPattern(inputValue)) {
        // dont turn match pattern into url
        alternatives.push(stringToUrl(inputValue))
      }
    }
    if (tabUrl) {
      alternatives.push(stringToMatchPattern(tabUrl.hostname))
      if (tabUrl.hostname !== inputValue) {
        alternatives.push(tabUrl.hostname)
      }
    }

    // Remove duplicates and filter some inputs
    return [...new Set(alternatives)].filter((alt) => alt !== "*://*.*://*.*" && alt !== inputValue)
  }

  return (
    <div id="input-wrapper">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputIsValid) {
            e.preventDefault()
            handleAddNewUrl()
          }
        }}
        onBlur={handleInputChange}
        onChange={handleInputChange}
        ref={urlInput}
        type="url"
        className="url-input"
        placeholder="example.com"
      />
      {inputAlternatives.map((Alternative, index) => (
        <div
          key={index}
          className="alternatives-container"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onHandleAlternative(Alternative)
            }
          }}
        >
          <div
            className="alternatives"
            title={Alternative}
            onClick={() => onHandleAlternative(Alternative)}
          >
            {Alternative}
          </div>
        </div>
      ))}
      <div className="button-wrapper">
        <button
          ref={addButton}
          type="button"
          disabled={!inputIsValid}
          onClick={handleAddNewUrl}
          className={`url-button add ${!inputIsValid ? "disabled" : ""}`}
          title={!inputIsValid ? "Please enter a valid URL or match pattern" : ""}
        >
          Add
        </button>
        <button type="button" onClick={handleCloseAndClear} className="url-button cancel">
          Cancel
        </button>
      </div>
    </div>
  )
}
