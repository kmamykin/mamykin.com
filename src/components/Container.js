import React from "react"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

export default ({ children }) => {
  return (
    <div
      css={css({
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px ${rhythm(1 / 2)}`,
        paddingTop: 0,
      })}
    >
      {children}
    </div>
  )
}
