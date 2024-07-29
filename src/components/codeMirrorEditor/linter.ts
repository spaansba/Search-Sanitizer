import { Diagnostic, linter } from "@codemirror/lint"
import { EditorView } from "codemirror"

const MAX_LINES = 200 // Maximum number of lines allowed
const MAX_CHARS_PER_LINE = 100 // Maximum number of characters allowed per line

export const urlLinter = linter(
  (view: EditorView) => {
    let diagnostics: Diagnostic[] = []
    let doc = view.state.doc

    // Check if total lines exceed MAX_LINES
    if (doc.lines > MAX_LINES) {
      diagnostics.push({
        from: 0,
        to: doc.length,
        severity: "error",
        message: `Too many lines. Maximum allowed: ${MAX_LINES}`,
      })
    }

    for (let i = 1; i <= doc.lines; i++) {
      let line = doc.line(i)
      let lineText = line.text.trim()

      // Check if line exceeds MAX_CHARS_PER_LINE
      if (lineText.length > MAX_CHARS_PER_LINE) {
        diagnostics.push({
          from: line.from,
          to: line.to,
          severity: "error",
          message: `Line ${i} exceeds maximum length of ${MAX_CHARS_PER_LINE} characters`,
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
      }

      if (lineText) {
        if (!isValidMatchPattern(lineText)) {
          let fixedPattern = attemptToFixMatchPattern(lineText)
          diagnostics.push({
            from: line.from,
            to: line.to,
            severity: "error",
            message: "Invalid match pattern",
            actions: [
              {
                name: "Fix match pattern",
                apply(view, from, to) {
                  view.dispatch({
                    changes: { from, to, insert: fixedPattern },
                  })
                },
              },
              {
                name: "Remove line",
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
    delay: 1000,
  }
)

function isValidMatchPattern(input: string): boolean {
  const matchPatternRegex =
    /^(?:(?:\*|https?|ftp):\/\/(?:\*|(?:\*\.)?[^/*]+)(?:\/.*)?|\*:\/\/.*)$/

  if (!matchPatternRegex.test(input)) {
    return false
  }

  if (input.includes("://") && !input.startsWith("*://")) {
    const [scheme, rest] = input.split("://")
    if (!["http", "https", "ftp"].includes(scheme)) {
      return false
    }
  }

  return true
}

function attemptToFixMatchPattern(input: string): string {
  input = input.trim()

  // If it's a URL, convert it to a match pattern
  if (/^https?:\/\//.test(input)) {
    return input.replace(/^(https?):\/\//, "*://*.")
  }

  // If it doesn't start with a scheme, add *://
  if (!/^(\*|https?|ftp):\/\//.test(input)) {
    input = "*://*." + input
  }

  // If there's no path, add /*
  if (!/\//.test(input)) {
    input += "/*"
  } else if (!input.endsWith("*")) {
    input += "*"
  }

  // Replace multiple consecutive * with a single *
  input = input.replace(/\*+/g, "*")

  return input
}
