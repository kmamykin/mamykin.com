import React from "react"

export default ({ markdown, frontmatter }) => {
  return (
    <pre>
      {JSON.stringify(frontmatter, null,2)}
      {markdown}
    </pre>
  )
}
