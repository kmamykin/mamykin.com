import React from "react"
import CodeBlock from "../CodeBlock"
import Markdown from "../Markdown"
import Image from "../Image"
import { renderNotebook } from "./renderNotebook"
import { css } from "@emotion/core"

const OutputImage = (props) => (
  <div css={css`
    display: flex;
    justify-content: center;
  `}>
    <Image {...props} />
  </div>
)
export default ({ notebook }) => {
  return renderNotebook(
    {
      root: ({ children }) => <div>{children}</div>,
      cells: ({ children }) => <div>{children}</div>,
      cell: ({ children, collapsed, autoscroll }) => <div>{children}</div>,
      code: ({ language, source }) => (
        <CodeBlock language={language}>{source}</CodeBlock>
      ),
      markdown: ({ source }) => {
        return <Markdown markdown={source} />
      },
      stream: ({ children }) => <pre>{children}</pre>,
      image: OutputImage,
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
