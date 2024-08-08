import React, { useContext, useEffect, useState } from "react"
import "./optionBlockedCards.css"
import { BlockedUrlsContext } from "../../options/options"
import ModalAddUrl from "../modals/modalAddUrl"
import { blockCategories } from "../../types"
import BlockedSvgContainer from "./blockedSvgContainer"

function OptionBlockedCards() {
  const [blockedUrls, setBlockedUrls] = useContext(BlockedUrlsContext)
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false)
  const [lifeTimeBlocks, setLifeTimeBlocks] = useState<blockCategories>({ w: 0, i: 0, v: 0, n: 0 })

  useEffect(() => {
    chrome.storage.local.get(["lifetimeTotalBlocks"], (result) => {
      setLifeTimeBlocks(result.lifetimeTotalBlocks)
    })
  }, [])

  function onClickDeleteButton(urlToDelete: string) {
    chrome.storage.local.get(["blockedUrlData"], (result) => {
      if (result.blockedUrlData) {
        const updatedBlockedUrls = { ...result.blockedUrlData }
        delete updatedBlockedUrls[urlToDelete]

        chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls }, () => {
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
            <p>Lifetime Blocks</p>
          </div>

          <BlockedSvgContainer
            lifeTimeBlocks={{
              i: lifeTimeBlocks.i,
              n: lifeTimeBlocks.n,
              v: lifeTimeBlocks.v,
              w: lifeTimeBlocks.w,
            }}
            addLifeTimeText={true}
          ></BlockedSvgContainer>
        </div>
        {Object.entries(blockedUrls).map(([blockedUrl, blockedCount], index) => (
          <div key={index} className="card-container">
            <div className="delete-button" onClick={() => onClickDeleteButton(blockedUrl)}>
              <svg viewBox="0 0 24 24" width="20px" height="20px">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </div>
            <div className="card-top">
              <p title={blockedUrl}> {blockedUrl}</p>
            </div>

            <BlockedSvgContainer
              lifeTimeBlocks={{
                i: blockedCount.i,
                n: blockedCount.n,
                v: blockedCount.v,
                w: blockedCount.w,
              }}
              addLifeTimeText={false}
            ></BlockedSvgContainer>
          </div>
        ))}
      </div>
    </>
  )
}

export default OptionBlockedCards
