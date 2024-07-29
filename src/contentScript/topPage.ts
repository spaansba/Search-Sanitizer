let resultsHidden = false
let blockedCount = 0
const styles = `
  .extension-button:hover { opacity: 0.4 !important; }
  .extension-button:active { transform: scale(0.99) !important; }
`

export function addTopOfPage(ExtensionIsOn: boolean, BlockedCount: number) {
  blockedCount = BlockedCount
  const appBar = document.querySelector("#appbar")
  if (!appBar) {
    console.log("App Bar could not be found")
    return
  }

  const style = document.createElement("style")
  style.id = "top-content-styles"
  style.textContent = styles
  document.head.appendChild(style)

  const baseButton = document.createElement("button")
  baseButton.style.width = "auto"
  baseButton.style.height = "30px"
  baseButton.style.marginBottom = "0.2rem"
  baseButton.style.paddingLeft = "0.7rem"
  baseButton.style.paddingRight = "0.7rem"
  baseButton.style.borderWidth = "0px"
  baseButton.style.borderRadius = "8px"
  baseButton.style.transition = "opacity 0.3s ease"
  baseButton.className = "extension-button"

  if (ExtensionIsOn) {
    AddTopExtensionOn(appBar, baseButton)
  } else {
    AddTopExtensionOff(appBar, baseButton)
  }
}

// Top of page when the extension is on, exists of a button to hide / show the blocked sites
// Also contains a count of how many sites are blocked on the current page
function AddTopExtensionOn(appBar: Element, baseButton: HTMLButtonElement) {
  const container = document.createElement("div")
  baseButton.addEventListener("click", () => {
    resultsHidden = !resultsHidden
    toggleHiddenResults()
    updateButtonText(baseButton)
  })
  container.appendChild(baseButton)
  appBar.appendChild(container)
  updateButtonText(baseButton)
}

function updateButtonText(button: HTMLButtonElement) {
  if (blockedCount < 1) {
    button.textContent = `We blocked ${blockedCount} search results`
  } else {
    button.textContent = `We blocked ${blockedCount} search results. Click to ${
      resultsHidden ? "hide" : "show"
    }`
  }
}

function toggleHiddenResults() {
  const hiddenElements = document.querySelectorAll("[card-show]")
  hiddenElements.forEach((element) => {
    if (element instanceof HTMLElement) {
      element.setAttribute("card-show", resultsHidden.toString())
    }
  })
}

export function getResultsHidden(): boolean {
  return resultsHidden
}

// Top of page when the extension is off, exists of a text and a button to turn the extension back on/refresh the page
function AddTopExtensionOff(appBar: Element, baseButton: HTMLButtonElement) {
  const container = document.createElement("div")
  baseButton.textContent =
    "<name> is currently turned off. Click to turn back on"
  baseButton.addEventListener("click", () => {
    chrome.storage.sync.set({ ExtensionOnOff: true }, () => {
      window.location.reload()
    })
  })
  container.appendChild(baseButton)
  appBar.appendChild(container)
}

export function updateBlockedCount(newCount: number) {
  blockedCount = newCount
  const button = document.querySelector(
    ".extension-button"
  ) as HTMLButtonElement
  if (button) {
    updateButtonText(button)
  }
}
