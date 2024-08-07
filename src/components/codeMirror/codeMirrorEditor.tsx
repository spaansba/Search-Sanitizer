import React from "react"
import { useCallback, useContext, useEffect, useRef, useState } from "react"
import { EditorView } from "codemirror"
import { EditorState } from "@codemirror/state"
import { lintGutter } from "@codemirror/lint"
import { lineNumbers, highlightActiveLineGutter, dropCursor, keymap } from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import { history, historyKeymap, standardKeymap } from "@codemirror/commands"
import { urlLinter } from "./codeMirrorLinter"
import type { BlockedUrlData } from "../../types"
import { BlockedUrlsContext } from "../../options/options"
import "./codeMirrorEditor.css"

const CodeMirrorEditor: React.FC = () => {
  const editorViewRef = useRef<EditorView | null>(null)
  const [blockedUrls, setBlockedUrls] = useContext(BlockedUrlsContext)
  const [initialDoc, setInitialDoc] = useState("")

  useEffect(() => {
    const newInitialDoc = Object.entries(blockedUrls)
      .map(([url]) => `${url}`)
      .join("\n")
    setInitialDoc(newInitialDoc)
    console.log(newInitialDoc)
  }, [blockedUrls])

  function onSave() {
    if (editorViewRef.current) {
      const docValues = editorViewRef.current.state.doc.toString().split("\n")
      const newBlockedUrlData: BlockedUrlData = {}

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

      chrome.storage.sync.set({ blockedUrlData: newBlockedUrlData }, () => {
        console.log("URL data saved")
        setBlockedUrls(newBlockedUrlData)
      })
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
        <button className="button" onClick={onSave}>
          Save
        </button>
      </div>
    </>
  )
}

export default CodeMirrorEditor
