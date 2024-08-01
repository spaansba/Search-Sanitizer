import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"
import "./popup.css"
import OnOffSlider from "../components/onOffSlider"
import { BlockedSites } from "../types"
import DashboardCard from "../components/dashboard/dashboardCard"
interface AppProps {
  blockedWebsites: BlockedSites[]
}

const Brands: BlockedSites[] = [
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
  function openOptionsPage() {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage()
    } else {
      window.open(chrome.runtime.getURL("options.html"))
    }
  }

  useEffect(() => {
    const messageListener = (message: any) => {
      if (message.type === "SLIDER_CHANGED") {
        // Update the state in the current context
        chrome.storage.sync.get([message.key], (result) => {
          // You might need to update your local state here, depending on how you're managing it
          console.log(`Slider ${message.key} changed to ${result[message.key]}`)
        })
      }
    }

    chrome.runtime.onMessage.addListener(messageListener)

    return () => {
      chrome.runtime.onMessage.removeListener(messageListener)
    }
  }, [])

  return (
    <div id="popup-container">
      <div id="entire-top-bar">
        <div id="left-top-bar" className="top-bar-section">
          <img className="top-bar-icon" src="logoApp.png" alt="Broom icon" />
          <p className="header-text">Search Sanitzer</p>
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
          <DashboardCard website={website}></DashboardCard>
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
  const modal = document.querySelector(
    "[data-modal]"
  ) as HTMLDialogElement | null
  if (modal) {
    modal.showModal()
  }
}

function closeAddSiteModal() {
  const modal = document.querySelector(
    "[data-modal]"
  ) as HTMLDialogElement | null
  if (modal) {
    modal.close()
  }
}

const container = document.createElement("div")
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App blockedWebsites={Brands} />)

export default App
