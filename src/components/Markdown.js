import React from "react"
import CodeBlock from "./CodeBlock"
import Image from "./Image"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import RemarkMath from "remark-math"
import ReactMarkdown from "react-markdown"
import { InlineMath, BlockMath } from "./KaTeX"

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

// Need to use div instead of p because of images rendered
// using gatsby-image use div as a wrapper, and p > div is invalid HTML
const MarkdownParagraph = ({ children }) => (
  <div
    css={css`
      padding: 0;
      margin: 0 0 ${rhythm(1)} 0;
    `}
  >
    {children}
  </div>
)

const MarkdownMath = ({ value }) => <BlockMath math={value}/>

const MarkdownInlineMath = ({ value }) => <InlineMath math={value}/>

// https://github.com/rexxars/react-markdown#node-types for the list of all renderers
export default ({ markdown }) => {
  return (
    <ReactMarkdown
      source={markdown}
      escapeHtml={false}
      plugins={[RemarkMath]}
      renderers={{
        code: MarkdownCode,
        inlineCode: MarkdownInlineCode,
        image: MarkdownImage,
        paragraph: MarkdownParagraph,
        math: MarkdownMath,
        inlineMath: MarkdownInlineMath,
      }}
    />
  )
}
