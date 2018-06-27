import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import withRoot from '../withRoot'
import MathJax from '../components/MathJax'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles/index'
import cn from 'classnames'

const ResponsiveContainer = withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inner: {
    maxWidth: theme.breakpoints.values.md,
    width: '100%',
  },
}))(({ classes, children }) => (
  <div className={classes.root}>
    <div className={classes.inner}>{children}</div>
  </div>
))

const styles = theme => ({
  root: {
  },
  content: {
    marginTop: '64px',
    padding: '24px',
  },
  footer: {
    padding: '40px 24px',
  },
})

const Layout = ({ children, data, classes }) => (
  <div className={classes.root}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <AppBar position="fixed" color="default">
      <ResponsiveContainer>
        <Header siteTitle={data.site.siteMetadata.title} />
      </ResponsiveContainer>
    </AppBar>
    <ResponsiveContainer>
      <Paper className={classes.content} elevation={1} square={true}>
        <MathJax.Context>{children()}</MathJax.Context>
      </Paper>
    </ResponsiveContainer>
    <ResponsiveContainer>
      <div className={classes.footer}>
        <Footer />
      </div>
    </ResponsiveContainer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default withRoot(withStyles(styles)(Layout))

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
