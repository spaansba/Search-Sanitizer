import React, { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"

interface BlockedWebsitesProps {
  id: number
  icon: string
  url: string
}

interface AppProps {
  blockedWebsites: BlockedWebsitesProps[]
}

const Brands: BlockedWebsitesProps[] = [
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 2,
    icon: "broom.png",
    url: "wikipedia.com",
  },
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 2,
    icon: "broom.png",
    url: "wikipedia.com",
  },
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 2,
    icon: "broom.png",
    url: "wikipedia.com",
  },
  {
    id: 1,
    icon: "broom.png",
    url: "reddit.com",
  },
]

const App: React.FC<AppProps> = ({ blockedWebsites }) => {
  const [showPopup, setAddSiteShowPopup] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  const handleAddNewClick = () => {
    setAddSiteShowPopup(true)
  }

  const handleClosePopup = () => {
    setAddSiteShowPopup(false)
  }

  // For if the user clicks outside of the add site popup, close the add site popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClosePopup()
      }
    }

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showPopup])

  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <div id="left-top-bar" className="top-bar-section">
          <img className="top-bar-icon" src="broom.png" alt="Broom icon" />
          <p className="header-text">Search Sanitzer</p>
        </div>
        <div id="right-top-bar" className="top-bar-section">
          <div className="slider-container">
            <input type="checkbox" className="slider-checkbox" id="checkbox" />
            <label className="slider-switch" htmlFor="checkbox">
              <span className="slider-slider"></span>
            </label>
          </div>
          <div id="settings-icon" className="button-hover-effect">
            <img src="setting.png" alt="Settings icon" />
          </div>
        </div>
      </div>

      <div id="middle-section" className="scrollable-section">
        <div
          onClick={handleAddNewClick}
          id="blocked-add-new"
          className="blocked-card-outline blocked-card-add button-hover-effect"
        >
          <img className="blocked-add-icon" src="add.png" alt="plus icon" />
        </div>
        {blockedWebsites.map((website) => (
          <div
            className="button-hover-effect blocked-card-outline blocked-card-inside"
            key={website.id}
          >
            <img
              className="blocked-site-img"
              src={website.icon}
              alt={`Logo for ${website.url}`}
            />
            <div className="blocked-site-text-container">
              <span className="blocked-site-url">{website.url}</span>
              <span className="blocked-site-under-text">Blocked 12k times</span>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button
              onClick={() => {
                handleClosePopup()
              }}
            >
              Add &lt;current site&gt;
            </button>
            <button
              onClick={() => {
                handleClosePopup()
              }}
            >
              Manual add sites
            </button>
            <div
              className="cross-button button-hover-effect"
              onClick={handleClosePopup}
            >
              <img className="cross-image" src="close.png"></img>
            </div>
          </div>
        </div>
      )}
      <div id="bottom-bar"></div>
    </div>
  )
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App blockedWebsites={Brands} />)

export default App
