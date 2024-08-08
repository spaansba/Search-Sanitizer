import React, { useCallback, useEffect, useRef, useState } from "react"
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
  addCurrentUrl: boolean
}

export default function UrlInput({ handleClose, addBlockedUrl, addCurrentUrl }: UrlInputProps) {
  const [inputValue, setInputValue] = useState<string>("")
  const urlInput = useRef<HTMLInputElement>(null)
  const [tabUrl, setTabUrl] = useState<URL>()
  const [inputAlternatives, setInputAlternatives] = useState<string[]>([])
  const [inputIsValid, setInputIsValid] = useState<boolean>()
  const addButton = useRef<HTMLButtonElement>(null)

  // If we use urlInput.current everywhere we would get "'urlInput.current' is possibly 'null'." everywhere
  const getInputElement = useCallback(() => {
    if (!urlInput.current) {
      throw new Error("urlInput is not available")
    }
    return urlInput.current
  }, [])

  function onHandleAlternative(Alternative: string) {
    setInputValue(Alternative.trim())
    getInputElement().value = Alternative
    getInputElement().focus()
  }

  useEffect(() => {
    if (tabUrl) {
      getInputElement().value = tabUrl.hostname
      setInputAlternatives(getUrlAlternatives())
      getInputElement().focus()
    }
  }, [tabUrl, getInputElement])

  useEffect(() => {
    setInputAlternatives(getUrlAlternatives)
    setInputIsValid(isValidMatchPattern(inputValue) || isValidUrl(inputValue))
  }, [inputValue])

  // Get the opened tab to backfill the input value
  useEffect(() => {
    // If we dont want the current url in the blocked site input (e.g. option page)
    if (!addCurrentUrl) {
      return
    }
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]?.url) {
        const newTabUrl: URL = new URL(tabs[0].url)
        setTabUrl(newTabUrl)
        setInputValue(newTabUrl.hostname)
        setInputAlternatives(getUrlAlternatives())
      }
    })
  }, [addCurrentUrl])

  const handleAddNewUrl = () => {
    if (inputIsValid) {
      addBlockedUrl(inputValue)
      handleClose()
    }
  }

  const handleInputChange = () => {
    if (inputValue === getInputElement().value) {
      return
    }
    setInputValue(getInputElement().value.trim())
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
        <button type="button" onClick={handleClose} className="url-button cancel">
          Cancel
        </button>
      </div>
    </div>
  )
}
