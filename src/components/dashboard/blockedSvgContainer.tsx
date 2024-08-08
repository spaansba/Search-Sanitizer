import React from "react"
import { formatCount } from "../../helper/generalHelper"
import "./blockedSvgContainer.css"
import type { blockCategories } from "../../types"

interface BlockedSvgContainerProps {
  lifeTimeBlocks: blockCategories
  addLifeTimeText: boolean
}

export default function BlockedSvgContainer({
  lifeTimeBlocks,
  addLifeTimeText,
}: BlockedSvgContainerProps) {
  const getTitle = (count: number, type: string) => {
    const blockedText = addLifeTimeText ? "Lifetime blocked" : "Blocked"
    return `${formatCount(count)} ${blockedText} ${type} search results`
  }

  return (
    <>
      <div className="blocked-svg-container">
        <div className="blocked-results" title={getTitle(lifeTimeBlocks.w, "regular")}>
          <svg viewBox="0 0 24 24" width="22px" height="22px">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4v2h-4V9z" />
          </svg>
          <span className="badge"> {formatCount(lifeTimeBlocks.w)}</span>
        </div>

        <div className="blocked-results" title={getTitle(lifeTimeBlocks.i, "image")}>
          <svg viewBox="0 0 24 24" width="22px" height="22px">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
          </svg>
          <span className="badge"> {formatCount(lifeTimeBlocks.i)}</span>
        </div>

        <div className="blocked-results" title={getTitle(lifeTimeBlocks.v, "video")}>
          <svg viewBox="0 0 24 24" width="22px" height="22px">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
          </svg>
          <span className="badge"> {formatCount(lifeTimeBlocks.v)}</span>
        </div>

        <div className="blocked-results" title={getTitle(lifeTimeBlocks.n, "news")}>
          <svg height="22px" viewBox="0 -960 960 960" width="22px">
            <path d="M165.5-110.91q-37.54 0-64.27-26.73-26.73-26.74-26.73-64.27v-649.57l68.67 67.72 66.96-67.72 67.72 67.72 67.72-67.72 66.95 67.72L480-851.48l67.48 67.72 66.95-67.72 67.72 67.72 67.72-67.72 66.96 67.72 68.67-67.72v649.57q0 37.53-26.73 64.27-26.73 26.73-64.27 26.73h-629Zm0-91h270.91v-240H165.5v240Zm358.09 0H794.5v-76.18H523.59v76.18Zm0-163.59H794.5v-76.41H523.59v76.41ZM165.5-529.09h629v-112.82h-629v112.82Z" />
          </svg>
          <span className="badge"> {formatCount(lifeTimeBlocks.n)}</span>
        </div>
      </div>
    </>
  )
}
