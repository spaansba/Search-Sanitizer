let resultsHidden = false

export function addTopOfPage() {
  const appBar = document.querySelector("#appbar")
  if (!appBar) {
    console.log("App Bar could not be found")
    return
  }
  console.log("App bar found:", appBar)
  const container = document.createElement("div")
  const toggleButton = document.createElement("button")
  toggleButton.style.width = "auto"
  toggleButton.style.height = "30px"
  toggleButton.style.marginBottom = "0.5rem"
  toggleButton.style.paddingLeft = "0.7rem"
  toggleButton.style.paddingRight = "0.7rem"
  toggleButton.style.borderWidth = "0px"
  toggleButton.style.borderRadius = "8px"
  container.appendChild(toggleButton)
  appBar.appendChild(container)
  // Add event listener to the toggle button
  toggleButton.addEventListener("click", () => {
    resultsHidden = !resultsHidden
    updateToggleButton(toggleButton)
    toggleHiddenResults()
  })
  updateToggleButton(toggleButton)
}

function updateToggleButton(button: HTMLButtonElement) {
  button.textContent = resultsHidden
    ? "We blocked x search results. Click to block"
    : "We blocked x search results. Click to show"
}

function toggleHiddenResults() {
  const hiddenElements = document.querySelectorAll("[card-show]")
  hiddenElements.forEach((el: HTMLElement) => {
    el.setAttribute("card-show", resultsHidden.toString())
  })
}

export function getResultsHidden(): boolean {
  return resultsHidden
}
