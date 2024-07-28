import React, { useState, useEffect } from "react"
import "./onOffSlider.css"

interface OnOffSliderProps {
  id: string
  googleStorageKey: string
}

function OnOffSlider({ id, googleStorageKey }: OnOffSliderProps) {
  const [isChecked, setIsChecked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // get the inital state of the slider
    chrome.storage.sync.get([googleStorageKey], (result) => {
      setIsChecked(result[googleStorageKey] || false)
      setIsLoaded(true)
    })

    // Listen for changes from other contexts
    const listener = (changes: {
      [key: string]: chrome.storage.StorageChange
    }) => {
      if (changes[googleStorageKey]) {
        setIsChecked(changes[googleStorageKey].newValue)
      }
    }
    chrome.storage.onChanged.addListener(listener)

    return () => {
      chrome.storage.onChanged.removeListener(listener)
    }
  }, [googleStorageKey])

  const handleChange = () => {
    const newValue = !isChecked
    chrome.storage.sync.set({ [googleStorageKey]: newValue })
    setIsChecked(newValue)

    // Notify other contexts about the change (for if 2 sliders are open in different contexts (e.g on/off slider in both options and popup))
    chrome.runtime.sendMessage({
      type: "SLIDER_CHANGED",
      key: googleStorageKey,
      value: newValue,
    })
  }

  if (!isLoaded) {
    return null
  }

  return (
    <div className="slider-container">
      <input
        type="checkbox"
        id={id}
        className="slider-checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="slider-switch" htmlFor={id}>
        <span className="slider-slider"></span>
      </label>
    </div>
  )
}

export default OnOffSlider
