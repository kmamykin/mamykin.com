import React from "react"
import CodeBlock from "../CodeBlock"
import Markdown from "../Markdown"
import Image from "../Image"
import { renderNotebook } from "./renderNotebook"

export default ({ notebook }) => {
  return renderNotebook(
    {
      root: ({ children }) => <div>{children}</div>,
      cells: ({ children }) => <div>{children}</div>,
      code: ({ language, source }) => (
        <CodeBlock language={language}>{source}</CodeBlock>
      ),
      markdown: ({ source }) => {
        return <Markdown markdown={source} />
      },
      stream: ({ children }) => <pre>{children}</pre>,
      image: props => <Image {...props} />,
      text: props => <pre {...props} />,
      html: ({ html }) => (
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      ),
      json: ({ json }) => (
        <CodeBlock language="json">{JSON.stringify(json, null, 2)}</CodeBlock>
      ),
    },
    notebook
  )
}
