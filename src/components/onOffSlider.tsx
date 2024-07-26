import React, { useState } from "react"
import "./onOffSlider.css"

interface OnOffSliderProps {
  id: string
  onChange: (value: boolean) => void
  keyName: string
}

function OnOffSlider({ id, onChange, keyName }: OnOffSliderProps) {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => {
    const newValue = !isChecked
    setIsChecked(newValue)
    onChange(newValue)
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
