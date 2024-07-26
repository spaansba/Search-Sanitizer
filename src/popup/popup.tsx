import React, { useEffect, useRef, useState } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"
import OnOffSlider from "../components/onOffSlider"
import { UserSettings } from "../types"
import { getStorageItem, updateOption } from "../options/optionsHelper"

interface BlockedWebsitesProps {
  id: number
  icon: string
  url: string
}

interface AppProps {
  blockedWebsites: BlockedWebsitesProps[]
}

const OnOffSetting: UserSettings = {
  settingName: "Extension on",
  googleStorageKey: "ExtensionOnOff",
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
    id: 3,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 4,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 5,
    icon: "broom.png",
    url: "wikipedia.com",
  },
  {
    id: 6,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 7,
    icon: "broom.png",
    url: "reddit.com",
  },
  {
    id: 8,
    icon: "broom.png",
    url: "wikipedia.com",
  },
  {
    id: 9,
    icon: "broom.png",
    url: "reddit.com",
  },
]

const App: React.FC<AppProps> = ({ blockedWebsites }) => {
  const [initialValue, setInitialValue] = useState<boolean | null>(null)

  // Function to handle slider change
  async function handleSliderChange(googleStorageKey: string, value: boolean) {
    await updateOption(googleStorageKey, value)
  }

  useEffect(() => {
    const fetchInitialValue = async () => {
      const value = await getStorageItem<boolean>(OnOffSetting.googleStorageKey)
      setInitialValue(value ?? false)
    }
    fetchInitialValue()
  }, []) // Empty dependency array ensures this runs only once on mount
  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <div id="left-top-bar" className="top-bar-section">
          <img className="top-bar-icon" src="broom.png" alt="Broom icon" />
          <p className="header-text">Search Sanitzer</p>
        </div>
        <div id="right-top-bar" className="top-bar-section">
          <OnOffSlider id="OnOff" googleStorageKey={"ExtensionOnOff"} />
          <div id="settings-icon" className="button-hover-effect">
            <img src="setting.png" alt="Settings icon" />
          </div>
        </div>
      </div>

      <div id="middle-section" className="scrollable-section">
        <div
          data-open-modal
          onClick={openAddSiteModal}
          id="blocked-add-new"
          className="blocked-card-outline blocked-card-add button-hover-effect"
        >
          <img className="blocked-add-icon" src="add.png" alt="plus icon" />
        </div>

        <dialog data-modal>
          <div className="popup-overlay">
            <div className="popup-content">
              <button id="add-current-site-btn" onClick={closeAddSiteModal}>
                Add current site;
              </button>
              <button id="add-manual-site-btn" onClick={onManualAddSitesClick}>
                Manual add sites
              </button>
              <div
                id="close-modal-btn"
                className="cross-button button-hover-effect"
                onClick={closeAddSiteModal}
              >
                <img className="cross-image" src="close.png"></img>
              </div>
            </div>
          </div>
        </dialog>
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

      <div id="bottom-bar"></div>
    </div>
  )
}

function onManualAddSitesClick() {
  chrome.runtime.openOptionsPage()
}

function openAddSiteModal() {
  const modal: HTMLDialogElement = document.querySelector("[data-modal]")
  modal.showModal()
}

function closeAddSiteModal() {
  const modal: HTMLDialogElement = document.querySelector("[data-modal]")
  modal.close()
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App blockedWebsites={Brands} />)

export default App
