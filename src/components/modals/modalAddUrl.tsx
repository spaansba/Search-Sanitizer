import React, { useContext, useEffect, useRef } from "react"
import "./modalAddUrl.css"
import { BlockedUrlsContext } from "../../options/options"
import UrlInput from "../urlInput"
import { transformUserInputToValidURL } from "../../helper/urlHelpers"

interface ModalAddUrlProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModalAddUrl({ isOpen, onClose }: ModalAddUrlProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [_, setBlockedUrls] = useContext(BlockedUrlsContext)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  function addBlockedUrl(urlToAdd: string) {
    urlToAdd = transformUserInputToValidURL(urlToAdd)

    chrome.storage.local.get(["blockedUrlData"], (result) => {
      if (result.blockedUrlData) {
        const updatedBlockedUrls = { ...result.blockedUrlData }
        updatedBlockedUrls[urlToAdd] = {
          i: 0,
          s: 0,
          v: 0,
        }

        chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls }, () => {
          setBlockedUrls(updatedBlockedUrls)
          handleClose()
        })
      }
    })
  }

  return (
    <dialog className="dialog-container" ref={dialogRef} onClose={handleClose}>
      <h1>Add new URL to block</h1>
      <UrlInput handleClose={handleClose} addBlockedUrl={addBlockedUrl}></UrlInput>
    </dialog>
  )
}
