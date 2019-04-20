import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

const resetLinkCss = css`
  text-decoration: none;
  text-shadow: none;
  background-image: none;
  color: white;
`
export default ({children, ...props}) => {
  return (
    <Link css={resetLinkCss} {...props}>
      {children}
    </Link>
  )
}
