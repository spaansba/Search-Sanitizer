import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { EditorView } from "codemirror"
import { EditorState } from "@codemirror/state"
import { lintGutter } from "@codemirror/lint"
import {
  lineNumbers,
  highlightActiveLineGutter,
  dropCursor,
  keymap,
} from "@codemirror/view"
import { javascript } from "@codemirror/lang-javascript"
import { history, historyKeymap, standardKeymap } from "@codemirror/commands"
import { urlLinter } from "./linter"

const CodeMirrorEditor: React.FC = () => {
  const editorViewRef = useRef<EditorView | null>(null)
  const [initialDoc, setInitialDoc] = useState<string>("")

  // Get inital blockedUrls from storage
  useEffect(() => {
    chrome.storage.sync.get(["blockedUrls"], (result) => {
      if (result.blockedUrls) {
        console.log(result.blockedUrls)
        setInitialDoc(result.blockedUrls.join("\n"))
      }
    })
  }, [])

  // When initalDoc is loaded add values to the editor
  useLayoutEffect(() => {
    if (editorViewRef.current) {
      editorViewRef.current.dispatch({
        changes: {
          from: 0,
          to: editorViewRef.current.state.doc.length,
          insert: initialDoc,
        },
      })
      editorViewRef.current.focus()
    }
  }, [initialDoc])

  function addNew() {
    chrome.storage.sync.set({ ["blockedUrls"]: ["youtube.com"] }, function () {
      console.log("URL data saved")
    })
  }

  function onSave() {
    if (editorViewRef.current) {
      const docValues = editorViewRef.current.state.doc.toString()
      console.log(docValues)
      chrome.storage.sync.set(
        { ["blockedUrls"]: docValues.split("\n") },
        function () {
          console.log("URL data saved")
        }
      )
    }
  }

  const editor = useCallback((parent: HTMLDivElement | null) => {
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
      console.log("editor destroyed")
    }
  }, [])

  return (
    <>
      <button className="buttons" onClick={addNew}>
        Add New
      </button>
      <button className="buttons" onClick={onSave}>
        Save
      </button>
      <div ref={editor} />
    </>
  )
}

export default CodeMirrorEditor
