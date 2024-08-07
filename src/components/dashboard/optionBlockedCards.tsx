import React, { useContext, useRef, useState } from "react"
import "./optionBlockedCards.css"
import { BlockedUrlsContext } from "../../options/options"
import ModalAddUrl from "../modals/modalAddUrl"

function OptionBlockedCards() {
  const [blockedUrls, setBlockedUrls] = useContext(BlockedUrlsContext)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const formatCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M"
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K"
    }
    console.log(count)
    if (count) {
      return count.toString()
    }

    return "0"
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
        <ModalAddUrl isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}></ModalAddUrl>
        <div
          className="card-container secondary add-card-container"
          onClick={() => setIsAddModalOpen(true)}
        >
          <div className="add-card-container" title="Add singular URL or match pattern">
            <svg viewBox="0 0 24 24" width="56px" height="56px">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        </div>

        <div className="card-container secondary">
          <div id="card-top-lifetime" className="card-top" title="Total lifetime blocked sites">
            <p> Lifetime Blocks</p>
          </div>

          <div className="card-bottom">
            <div className="blocked-results" title={`${1} Lifetime blocked regular search results`}>
              <svg viewBox="0 0 24 24" width="22px" height="22px">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4v2h-4V9z" />
              </svg>
              <span className="badge"> {formatCount(13)}</span>
            </div>

            <div className="blocked-results" title={`${1} Lifetime blocked image search results`}>
              <svg viewBox="0 0 24 24" width="22px" height="22px">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              <span className="badge"> {formatCount(12)}</span>
            </div>

            <div className="blocked-results" title={`${1} Lifetime blocked video search results`}>
              <svg viewBox="0 0 24 24" width="22px" height="22px">
                <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
              </svg>
              <span className="badge"> {formatCount(12)}</span>
            </div>

            <div className="blocked-results" title={`${1} Lifetime blocked video search results`}>
              <svg height="22px" viewBox="0 -960 960 960" width="22px">
                <path d="M165.5-110.91q-37.54 0-64.27-26.73-26.73-26.74-26.73-64.27v-649.57l68.67 67.72 66.96-67.72 67.72 67.72 67.72-67.72 66.95 67.72L480-851.48l67.48 67.72 66.95-67.72 67.72 67.72 67.72-67.72 66.96 67.72 68.67-67.72v649.57q0 37.53-26.73 64.27-26.73 26.73-64.27 26.73h-629Zm0-91h270.91v-240H165.5v240Zm358.09 0H794.5v-76.18H523.59v76.18Zm0-163.59H794.5v-76.41H523.59v76.41ZM165.5-529.09h629v-112.82h-629v112.82Z" />
              </svg>
              <span className="badge"> {formatCount(12)}</span>
            </div>
          </div>
        </div>
        {Object.entries(blockedUrls).map(([blockedUrl, count], index) => (
          <div key={index} className="card-container">
            <div className="delete-button" onClick={() => onClickDeleteButton(blockedUrl)}>
              <svg viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </div>
            <div className="card-top">
              <p title={blockedUrl}> {blockedUrl}</p>
            </div>

            <div className="card-bottom">
              <div
                className="blocked-results"
                title={`${formatCount(count.w)} Blocked regular search results`}
              >
                <svg viewBox="0 0 24 24" width="22px" height="22px">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4v2h-4V9z" />
                </svg>
                <span className="badge">{formatCount(count.w)}</span>
              </div>

              <div
                className="blocked-results"
                title={`${formatCount(count.i)} Blocked image search results`}
              >
                <svg viewBox="0 0 24 24" width="22px" height="22px">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                <span className="badge">{formatCount(count.i)}</span>
              </div>

              <div
                className="blocked-results"
                title={`${formatCount(count.v)} Blocked video search results`}
              >
                <svg viewBox="0 0 24 24" width="22px" height="22px">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
                </svg>
                <span className="badge">{formatCount(count.v)}</span>
              </div>

              <div
                className="blocked-results"
                title={`${formatCount(count.n)} Blocked news search results`}
              >
                <svg height="22px" viewBox="0 -960 960 960" width="22px">
                  <path d="M165.5-110.91q-37.54 0-64.27-26.73-26.73-26.74-26.73-64.27v-649.57l68.67 67.72 66.96-67.72 67.72 67.72 67.72-67.72 66.95 67.72L480-851.48l67.48 67.72 66.95-67.72 67.72 67.72 67.72-67.72 66.96 67.72 68.67-67.72v649.57q0 37.53-26.73 64.27-26.73 26.73-64.27 26.73h-629Zm0-91h270.91v-240H165.5v240Zm358.09 0H794.5v-76.18H523.59v76.18Zm0-163.59H794.5v-76.41H523.59v76.41ZM165.5-529.09h629v-112.82h-629v112.82Z" />
                </svg>
                <span className="badge">{formatCount(count.n)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OptionBlockedCards
