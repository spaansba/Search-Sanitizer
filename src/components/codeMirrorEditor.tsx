import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { EditorView, basicSetup } from "codemirror"
import { lineNumbers } from "@codemirror/view"
import { EditorState } from "@codemirror/state"

const CodeMirrorEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null)
  const [initialDoc, setInitialDoc] = useState<string>("// Your code here")

  useEffect(() => {
    chrome.storage.sync.get(["blockedUrls"], (result) => {
      if (result.blockedUrls) {
        console.log(result.blockedUrls)
        setInitialDoc(result.blockedUrls.join(","))
      }
    })
  }, [])

  useLayoutEffect(() => {
    if (!editorRef.current) return

    const state = EditorState.create({
      doc: initialDoc,
      extensions: [
        basicSetup,
        lineNumbers(),
        EditorView.theme({
          "&": {
            height: "300px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          },
          ".cm-scroller": {
            fontFamily: "monospace",
          },
          ".cm-content": {
            caretColor: "blue",
          },
          ".cm-line": {
            padding: "0 4px",
          },
          ".cm-activeLineGutter": {
            backgroundColor: "#e8f2ff",
          },
          ".cm-gutters": {
            backgroundColor: "#f5f5f5",
            color: "#333",
            border: "none",
          },
        }),
      ],
    })

    const view = new EditorView({
      state,
      parent: editorRef.current,
    })

    return () => {
      view.destroy()
    }
  }, [initialDoc])

  return <div ref={editorRef} />
}

export default CodeMirrorEditor
