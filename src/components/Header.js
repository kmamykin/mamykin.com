import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Headroom from "react-headroom"
import Container from "./Container"
import avatarSrc from "../images/avatar-48x48.png"

const avatarCss = css`
  height: 100%;
  width: 100%;
  background-image: url(${avatarSrc});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`
const Avatar = ({ src }) => (
  <div css={avatarCss}></div>
)

const Header = ({ siteTitle }) => (
  <Headroom
    wrapperStyle={{ marginBottom: rhythm(1) }}
    style={{
      background: 'rgb(57, 111, 176)',
      boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
    }}
  >
    <Container>
      <div css={css`display: flex;`}>
        <div css={css` padding: 0.75rem 0; flex: 1 1 0;`}>
          <h2 css={css` margin: 0; `}>
            <Link
              to="/"
              css={css`
              text-decoration: none;
              text-shadow: none;
              background-image: none;
              color: white;
            `}
            >
              {siteTitle}
            </Link>
          </h2>
        </div>
        <div css={css`width: 48px; height: 48px; align-self: center;`}><Avatar/></div>
      </div>
    </Container>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
