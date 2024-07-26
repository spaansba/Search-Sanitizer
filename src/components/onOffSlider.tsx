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
    chrome.storage.sync.get([googleStorageKey], (result) => {
      setIsChecked(result[googleStorageKey] || false)
      setIsLoaded(true)
    })
  }, [googleStorageKey])

  const handleChange = () => {
    const newValue = !isChecked
    chrome.storage.sync.set({ [googleStorageKey]: newValue })
    setIsChecked(newValue)
  }

  if (!isLoaded) {
    return null // or a loading indicator
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
