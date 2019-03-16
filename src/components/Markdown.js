import React from "react"
import MarkdownRender from "@nteract/markdown"


// https://github.com/rexxars/react-markdown#node-types for the list of all renderers
const createRenderers = () => ({
  code: ({ language, value }) => (
    <pre language={language}>{value}</pre>
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
