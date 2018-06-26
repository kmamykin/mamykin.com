import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import withRoot from '../withRoot'
import MathJax from '../components/MathJax'

import Header from '../components/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <MathJax.Context>{children()}</MathJax.Context>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default withRoot(Layout)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
