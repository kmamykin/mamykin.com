import React from "react"

export default ({ notebook }) => {
  return (
    <pre>
      {JSON.stringify(notebook, null, 2)}
    </pre>
  )
}
