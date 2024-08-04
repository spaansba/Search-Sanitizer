import React, { useContext, useEffect, useRef, useState } from "react"
import "./modalAddUrl.css"
import { BlockedUrlsContext } from "../../options/options"
import { isValidMatchPattern, isValidUrl } from "../../helper/validUrls"

interface ModalAddUrlProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModalAddUrl({ isOpen, onClose }: ModalAddUrlProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const urlInput = useRef<HTMLInputElement>(null)
  const [inputIsValid, setInputIsValid] = useState(false)
  const [_, setBlockedUrls] = useContext(BlockedUrlsContext)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  useEffect(() => {
    // Listen for the custom event to open the modal
    const handleOpenModal = (event: CustomEvent) => {
      dialogRef.current?.showModal()
      if (urlInput.current && event.detail.url) {
        urlInput.current.value = event.detail.url
        handleOnChange()
      }
    }

    document.addEventListener(
      "openAddUrlModal",
      handleOpenModal as EventListener
    )

    return () => {
      document.removeEventListener(
        "openAddUrlModal",
        handleOpenModal as EventListener
      )
    }
  }, [])

  const handleClose = () => {
    urlInput.current.value = ""
    onClose()
  }

  const handleAddNewUrl = () => {
    if (!inputIsValid) {
      return
    }
    const urlToAdd = urlInput.current.value

    if (urlToAdd) {
      chrome.storage.sync.get(["blockedUrlData"], (result) => {
        if (result.blockedUrlData) {
          const updatedBlockedUrls = { ...result.blockedUrlData }
          updatedBlockedUrls[urlToAdd] = {
            i: 0,
            s: 0,
            v: 0,
          }

          chrome.storage.sync.set(
            { blockedUrlData: updatedBlockedUrls },
            () => {
              setBlockedUrls(updatedBlockedUrls)
              handleClose()
            }
          )
        }
      })
    }
  }

  const handleOnChange = () => {
    const userInput = urlInput.current.value
    if (isValidMatchPattern(userInput) || isValidUrl(userInput)) {
      setInputIsValid(true)
    } else {
      setInputIsValid(false)
    }
  }

  const handleOnKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case "Enter":
        handleAddNewUrl()
        break
      case "Escape":
        handleClose()
        break
    }
  }

  return (
    <dialog
      className="add-url-dialog"
      ref={dialogRef}
      onClose={handleClose}
      onKeyDown={(event) => handleOnKeyDown(event)}
    >
      <h1>Add new URL to block</h1>
      <input
        onBlur={handleOnChange}
        onChange={handleOnChange}
        ref={urlInput}
        type="url"
        className="url-input"
        placeholder="example.com"
      />
      <div className="button-wrapper">
        <button
          onClick={handleAddNewUrl}
          className={`url-button add ${!inputIsValid ? "disabled" : ""}`}
          title={
            !inputIsValid ? "Please enter a valid URL or match pattern" : ""
          }
        >
          Add
        </button>
        <button onClick={handleClose} className="url-button cancel">
          Cancel
        </button>
      </div>
    </dialog>
  )
}
