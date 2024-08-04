import React from "react"

export default function urlInput() {
  return (
    <div id="input-wrapper">
      <input
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
    </div>
  )
}
