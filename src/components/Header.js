import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Headroom from "react-headroom"
import Container from "./Container"

const Header = ({ siteTitle }) => (
  <Headroom
    wrapperStyle={{ marginBottom: rhythm(1) }}
    style={{
      background: 'rgb(57, 111, 176)',
      boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.25)'
    }}
  >
    <Container>
      <div
        css={css`
          padding: 0.75rem 0;
        `}
      >
        <h2
          css={css`
            margin: 0;
          `}
        >
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
