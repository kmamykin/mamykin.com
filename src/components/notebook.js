import React from "react"

export default ({ notebook, frontmatter }) => {
  return (
    <pre>
      {JSON.stringify(frontmatter, null,2)}
      {JSON.stringify(notebook, null, 2)}
    </pre>
  )
}
