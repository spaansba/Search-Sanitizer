import React, { useEffect, useState } from "react"
import "./optionBlockedCards"
import { BlockedUrlData } from "../../types"

function OptionBlockedCards() {
  const [blockedUrls, setBlockedUrls] = useState<BlockedUrlData>({})

  // Get initial blockedUrls from storage
  useEffect(() => {
    chrome.storage.sync.get(["blockedUrlData"], (result) => {
      console.log("Retrieved from storage:", result.blockedUrlData)
      if (result.blockedUrlData) {
        setBlockedUrls(result.blockedUrlData)
      }
    })
  }, [])

  return (
    <>
      {Object.entries(blockedUrls).map(([url, count]) => (
        <div key={url}>
          {url}
          <div>Blocked {count.s} times</div>
        </div>
      ))}
    </>
  )
}

export default OptionBlockedCards
