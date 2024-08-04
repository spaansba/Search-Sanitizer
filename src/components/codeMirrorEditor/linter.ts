import { Diagnostic, linter } from "@codemirror/lint"
import { EditorView } from "codemirror"
import {
  isValidMatchPattern,
  isValidUrl,
  stringToMatchPattern,
  stringToUrl,
} from "../../helper/urlHelpers"

const MAX_CHARS_PER_LINE = 100 // Maximum number of characters allowed per line

export const urlLinter = linter(
  (view: EditorView) => {
    let diagnostics: Diagnostic[] = []
    let doc = view.state.doc

    for (let i = 1; i <= doc.lines; i++) {
      let line = doc.line(i)
      let lineText = line.text.trim()

      // Check if line exceeds MAX_CHARS_PER_LINE
      if (lineText.length > MAX_CHARS_PER_LINE) {
        diagnostics.push({
          from: line.from,
          to: line.to,
          severity: "error",
          message: `Exceeds maximum length of ${MAX_CHARS_PER_LINE} characters`,
          actions: [
            {
              name: "Truncate line",
              apply(view, from, to) {
                view.dispatch({
                  changes: {
                    from,
                    to,
                    insert: lineText.slice(0, MAX_CHARS_PER_LINE),
                  },
                })
              },
            },
          ],
        })
        return diagnostics
      }

      if (lineText) {
        if (!isValidMatchPattern(lineText) && !isValidUrl(lineText)) {
          const convertedUrl = stringToUrl(lineText)
          const fixedPattern = stringToMatchPattern(lineText)
          diagnostics.push({
            from: line.from,
            to: line.to,
            severity: "error",
            message: `Invalid match pattern or URL\n\nTurn into URL?: ${convertedUrl}\nOr turn into match pattern?: ${fixedPattern}\n\n`,
            actions: [
              {
                name: "Convert to URL",
                apply(view, from, to) {
                  view.dispatch({
                    changes: { from, to, insert: convertedUrl },
                  })
                },
              },
              {
                name: "Convert to Match Pattern",
                apply(view, from, to) {
                  view.dispatch({
                    changes: { from, to, insert: fixedPattern },
                  })
                },
              },
              {
                name: "Remove",
                apply(view, from, to) {
                  const lineStart = view.state.doc.lineAt(from).from
                  const lineEnd = view.state.doc.lineAt(to).to
                  view.dispatch({ changes: { from: lineStart, to: lineEnd } })
                },
              },
            ],
          })
        }
      }
    }

    return diagnostics
  },
  {
    delay: 200,
  }
)
