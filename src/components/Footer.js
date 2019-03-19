import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const footerCss = css`
  padding: ${rhythm(1)} 0;
  border-top: 2px solid rgb(0, 0, 0, 0.2);
`
const spanCss = css`
  margin-left: 5px;
`
export default () => {
  return (
    <footer css={footerCss}>
      <div css={css` display: flex; align-items: center; `}>
        <span>© {new Date().getFullYear()} Kliment Mamykin</span>
        <div css={css`flex: 1 1 auto; display: flex; align-items: center; justify-content: flex-end;`}>
          <span css={spanCss}>Built with{` `}</span>
          <span css={spanCss}><a href="https://www.gatsbyjs.org">Gatsby</a></span>
          <span css={spanCss}><a href="https://prismjs.com">Prism.js</a></span>
          <span css={spanCss}><a href="https://www.mathjax.org">MathJax</a></span>
        </div>
      </div>
    </footer>
  )
}
