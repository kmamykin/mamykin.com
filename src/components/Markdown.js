import React from "react"
import MarkdownRender from "@nteract/markdown"
import CodeBlock from "./CodeBlock"

// https://github.com/rexxars/react-markdown#node-types for the list of all renderers
const createRenderers = () => ({
  code: ({ language, value }) => (
    <CodeBlock language={language}>{value}</CodeBlock>
  ),
  inlineCode: ({ language, value }) => (
    <CodeBlock language={language} inline={true}>
      {value}
    </CodeBlock>
  ),
  image: props => <div {...props} data-props={JSON.stringify(props)} />,
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
