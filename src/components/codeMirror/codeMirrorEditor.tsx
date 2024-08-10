import React from "react"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { EditorView } from "codemirror"
import { EditorState } from "@codemirror/state"
import { lintGutter } from "@codemirror/lint"
import { lineNumbers, highlightActiveLineGutter, dropCursor, keymap } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import { history, historyKeymap, standardKeymap } from "@codemirror/commands"
import { urlLinter } from "./codeMirrorLinter"
import type { BlockedUrlDataLocal } from "../../types"
import { BlockedUrlsContext } from "../../options/options"
import "./codeMirrorEditor.css"

const CodeMirrorEditor: React.FC = () => {
  const editorViewRef = useRef<EditorView | null>(null)
  const [blockedUrls, setBlockedUrls] = useContext(BlockedUrlsContext)
  const [initialDoc, setInitialDoc] = useState<string>("")
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false)

  useEffect(() => {
    const newInitialDoc = Object.entries(blockedUrls)
      .map(([url]) => `${url}`)
      .join("\n")
    setInitialDoc(newInitialDoc)
  }, [blockedUrls])

  //Show a popup if the user tries to leave the page with unsaved changes in the editor
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        event.preventDefault()
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [hasUnsavedChanges])

  function onSave() {
    if (editorViewRef.current) {
      const docValues = editorViewRef.current.state.doc.toString().split("\n")
      const newBlockedUrlData: BlockedUrlDataLocal = {}

      docValues.forEach((url) => {
        url = url.trim()
        if (url) {
          newBlockedUrlData[url] = {
            w: blockedUrls[url]?.w || 0,
            i: blockedUrls[url]?.i || 0,
            v: blockedUrls[url]?.v || 0,
            n: blockedUrls[url]?.n || 0,
          }
        }
      })

      chrome.storage.local.set({ blockedUrlData: newBlockedUrlData }, () => {
        setBlockedUrls(newBlockedUrlData)
      })
    }
  }

  // If the editor changes from the original doc display a message that there are unsaved changes
  function onEditorChange() {
    if (editorViewRef.current) {
      const currentDoc = editorViewRef.current.state.doc.toString()
      if (currentDoc === initialDoc) {
        setHasUnsavedChanges(false)
      } else {
        setHasUnsavedChanges(true)
      }
    }
  }

  const editor = useCallback(
    (parent: HTMLDivElement | null) => {
      if (parent) {
        editorViewRef.current = new EditorView({
          parent,
          state: EditorState.create({
            doc: initialDoc,
            extensions: [
              urlLinter,
              keymap.of([...historyKeymap, ...standardKeymap]),
              EditorView.updateListener.of((update) => {
                if (update.docChanged) {
                  onEditorChange()
                }
              }),
              history(),
              dropCursor(),
              javascript(),
              lintGutter(),
              lineNumbers(),
              highlightActiveLineGutter(),
              EditorView.theme({
                "&": {
                  height: "300px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                },
                ".cm-scroller": {
                  fontFamily: "monospace",
                  fontSize: "14px",
                },
                ".cm-content": {
                  caretColor: "blue",
                },
                ".cm-line": {
                  padding: "0 4px",
                },
                ".cm-activeLineGutter": {
                  backgroundColor: "#e8f2ff",
                  color: "green",
                },
                ".cm-gutters": {
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  border: "none",
                },
              }),
            ],
          }),
        })
      } else {
        editorViewRef.current?.destroy()
      }
    },
    [initialDoc]
  )

  return (
    <>
      <div ref={editor} />
      <div className="bottom-button-container">
        <div className="text-button-wrapper">
          {hasUnsavedChanges && (
            <span className="unsaved-changes-text">Editor has unsaved changes</span>
          )}
          <button className="button" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </>
  )
}

export default CodeMirrorEditor
