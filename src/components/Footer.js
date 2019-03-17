import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const footerCss = css`
  padding: ${rhythm(1)} 0;
  border-top: 2px solid rgb(0, 0, 0, 0.1);
`
export default () => {
  return (
    <footer css={footerCss}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
