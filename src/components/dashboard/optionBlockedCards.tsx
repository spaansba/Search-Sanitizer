import React, { useEffect, useState } from "react"
import "./optionBlockedCards.css"
import { BlockedUrlData } from "../../types"

function OptionBlockedCards() {
  const [blockedUrls, setBlockedUrls] = useState<BlockedUrlData>({})

  useEffect(() => {
    chrome.storage.sync.get(["blockedUrlData"], (result) => {
      console.log("Retrieved from storage:", result.blockedUrlData)
      if (result.blockedUrlData) {
        setBlockedUrls(result.blockedUrlData)
      }
    })
  }, [])

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M"
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K"
    }
    return count.toString()
  }

  function onClickDeleteButton(urlToDelete: string) {
    chrome.storage.sync.get(["blockedUrlData"], (result) => {
      if (result.blockedUrlData) {
        const updatedBlockedUrls = { ...result.blockedUrlData }
        delete updatedBlockedUrls[urlToDelete]

        chrome.storage.sync.set({ blockedUrlData: updatedBlockedUrls }, () => {
          setBlockedUrls(updatedBlockedUrls)
        })
      }
    })
  }

  return (
    <>
      <div className="cards-container">
        {Object.entries(blockedUrls).map(([blockedUrl, count], index) => (
          <div key={index} className="card-container">
            <div
              className="delete-button"
              onClick={() => onClickDeleteButton(blockedUrl)}
            >
              <svg viewBox="0 -960 960 960">
                <path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z" />
              </svg>
            </div>
            <div className="card-top">
              <p title={blockedUrl}> {blockedUrl}</p>
            </div>

            <div className="card-bottom">
              <div
                className="blocked-results"
                title="Blocked regular search results"
              >
                <svg viewBox="0 -960 960 960">
                  <path d="M273.31-65.16q-83.35 0-142.86-59.53-59.51-59.53-59.51-142.88 0-83.36 59.53-142.86 59.53-59.51 142.89-59.51 83.35 0 142.86 59.53 59.5 59.53 59.5 142.88 0 83.36-59.53 142.86-59.52 59.51-142.88 59.51ZM839.06-94 576.71-355.78q-10.42 9.27-24.48 17.41t-26.94 13.14q-3.91-28.83-12.55-53.07-8.64-24.24-20.15-43.7 44.89-20.68 74.39-62.26 29.51-41.58 29.51-99.17 0-74.95-51.77-127.06-51.77-52.1-126.72-52.1-75.24 0-127.53 52.1-52.3 52.11-52.3 127.06 0 12.89 2 26.21t6.15 22.05q-21.96 2.34-48.03 9.78-26.06 7.45-45.46 18.81-5.9-16.85-8.5-37.59-2.59-20.75-2.59-39.26 0-114.78 80.77-195.19 80.78-80.41 195.6-80.41 114.17 0 194.49 80.74 80.33 80.74 80.33 194.86 0 44.32-13.27 85.58t-36.72 71.17l264.97 263.83L839.06-94ZM202.9-160.93l70.1-69.91 68.87 69.25 36.32-36.42-68.77-67.54 71.2-71.77-36.19-36.75-69.81 70.1-71.05-70.67-35.76 36.32 70.15 69.77-71.11 70.54 36.05 37.08Z" />
                </svg>
                <span> {formatCount(count.s)}</span>
              </div>
              <div
                className="blocked-results"
                title="Blocked image search results"
              >
                <svg viewBox="0 -960 960 960">
                  <path d="M856.2-226.93 226.93-856.2h540.75q36.42 0 62.47 26.05 26.05 26.05 26.05 62.47v540.75ZM811.32-35.84l-68.33-68.33H192.32q-36.42 0-62.28-25.87-25.87-25.86-25.87-62.28v-550.67l-67.66-67.66 52.42-52.42L863.74-88.26l-52.42 52.42ZM229.23-272.35H575.9l-88.75-88.56-39.82 50.46-99.53-121.46-118.57 159.56Z" />
                </svg>
                <span className="count-text"> {formatCount(count.i)}</span>
              </div>
              <div
                className="blocked-results"
                title="Blocked video search results"
              >
                <svg viewBox="0 -960 960 960">
                  <path d="M835.33-28 696.67-166h-542q-27 0-46.84-19.83Q88-205.67 88-232.67V-722q0-27 19.83-46.83 19.84-19.84 46.84-19.84h14.66l15.34 15.34v94.66l-150-150L82-876 882.67-75.33 835.33-28Zm31.34-156-144-144v-309.33L565.33-512.67v-126H412L253.33-797.33h565.34q27 0 46.83 19.83t19.83 46.83v498q0 16.34-4.83 28.67-4.83 12.33-13.83 20ZM251.33-326h286l-286-286v286Z" />
                </svg>
                <span> {formatCount(count.v)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OptionBlockedCards
