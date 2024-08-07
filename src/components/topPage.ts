const styles = `
  .extension-button:hover { opacity: 0.4 !important; }
  .extension-button:active { transform: scale(0.99) !important; }
 .blocked-count-overlay {
  position: absolute;
  background-color: #8e8280;
  color: white;
  padding-right: 2px;
  padding-left: 2px;
  font-size: 12px;
  border-radius: 8px;
  font-weight: bold;
  min-width: 26px;
  max-width: 60px;
  height: 15px;
  top: 1px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  user-select: none;
}
#extension-button-search-bar{
  position: relative;
  user-select: none;
}
.logo-image{
  width: 22px;
  height: 22px;
}
`

export function addTopOfPage(
  getResultsAreHidden: () => boolean,
  setResultsAreHidden: (value: boolean) => void,
  blockedCount: number,
  isExtensionOn: boolean
) {
  let searchFormContainer = document.querySelector(".fM33ce")
  let container = document.createElement("div")

  // if for whatever reason the searchFormContainer can not be found use the more secure appbar (this is under the search bar)
  if (!searchFormContainer) {
    searchFormContainer = document.querySelector("#appbar")
    container.style.marginBottom = "5px"
    if (!searchFormContainer) {
      return
    }
  }

  container.id = "extension-button-search-bar"
  container.title = getTitle(blockedCount, getResultsAreHidden())
  container.className = "XDyW0e"

  const img = document.createElement("img")
  img.src = chrome.runtime.getURL("logoApp.png")
  img.className = "logo-image"

  const blockedOverlay = document.createElement("div")
  blockedOverlay.className = "blocked-count-overlay"
  blockedOverlay.textContent = blockedCount.toString()

  container = isExtensionOn ? getExtensionOnElement(container) : getExtensionOffElement(container)

  container.appendChild(img)
  container.appendChild(blockedOverlay)

  // Insert the container after the form
  const form = searchFormContainer.querySelector(".dRYYxd")
  if (form) {
    form.insertAdjacentElement("afterend", container)
  } else {
    searchFormContainer.appendChild(container)
  }

  function getExtensionOnElement(container: HTMLDivElement): HTMLDivElement {
    container.addEventListener("click", () => {
      setResultsAreHidden(!getResultsAreHidden())
      container.title = getTitle(blockedCount, getResultsAreHidden())
    })
    return container
  }

  addStylesToHead()
  function addStylesToHead() {
    const styleElement = document.createElement("style")
    styleElement.textContent = styles
    document.head.appendChild(styleElement)
  }

  function getExtensionOffElement(container: HTMLDivElement): HTMLDivElement {
    container.title = "Search Sanitizer is currently turned off. Click to turn back on"
    container.style.opacity = "0.4"
    container.addEventListener("click", () => {
      chrome.storage.local.set({ extensionOnOff: true }, () => {
        window.location.reload()
      })
    })
    return container
  }
}

function getTitle(blockedCount: number, resultsHidden: boolean): string {
  if (blockedCount < 1) {
    return `${blockedCount} blocked search results`
  } else {
    return `${blockedCount} blocked search results. Click to ${
      !resultsHidden ? "show" : "hide"
    } them again`
  }
}

export function updateBlockedCount(blockedCount: number) {
  const container = document.querySelector("#extension-button-search-bar") as HTMLDivElement
  if (container) {
    container.title = getTitle(blockedCount, false) // Assuming results are not hidden by default
  }

  const overlayContainer = document.querySelector(".blocked-count-overlay") as HTMLDivElement
  if (overlayContainer) {
    overlayContainer.textContent = blockedCount.toString()
  }
}
