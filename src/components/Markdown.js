import React from "react"
import MarkdownRender from "@nteract/markdown"
import CodeBlock from "./CodeBlock"
import Image from "./Image"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const MarkdownCode = ({ language, value }) => (
  <CodeBlock language={language}>{value}</CodeBlock>
)

const MarkdownInlineCode = ({ language, value }) => (
  <CodeBlock language={language} inline={true}>
    {value}
  </CodeBlock>
)

const MarkdownImage = ({ alt, title, src }) => (
  <Image alt={alt} title={title} src={src} />
)

const Paragraph = ({ children }) => (
  <div
    css={css`
      padding: 0;
      margin: 0 0 ${rhythm(1)} 0;
    `}
  >
    {children}
  </div>
)

// https://github.com/rexxars/react-markdown#node-types for the list of all renderers
const createRenderers = () => ({
  code: MarkdownCode,
  inlineCode: MarkdownInlineCode,
  image: MarkdownImage,
  paragraph: Paragraph,
})

export default ({ markdown }) => {
  return (
    <MarkdownRender
      source={markdown}
      escapeHtml={false}
      renderers={createRenderers()}
    />
  )
}
