import React from "react"
import MarkdownRender from "@nteract/markdown"

export default ({ markdown, frontmatter }) => {
  return (
    <MarkdownRender
      source={markdown}
      renderers={{}}
    />
  )
}
