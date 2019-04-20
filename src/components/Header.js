import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Headroom from "react-headroom"
import Container from "./Container"
import UnstyledLink from "./UnstyledLink"
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
      <div css={css`display: flex; align-items: center;`}>
        <div css={css`padding: 0.75rem 0; flex: 1 1 0;`}>
          <h2 css={css`margin: 0;`}>
            <UnstyledLink to="/">
              {siteTitle}
            </UnstyledLink>
          </h2>
        </div>
        <div>
          <h4 css={css` margin: 0 15px;`}>
            <UnstyledLink to="/about/">
              About
            </UnstyledLink>
          </h4>
        </div>
        <div css={css`width: 48px; height: 48px;`}>
          <UnstyledLink to="/about/">
            <Avatar/>
          </UnstyledLink>
        </div>
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
