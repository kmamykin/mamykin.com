import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {},
})

const Article = ({ frontmatter, children }) => (
  <div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.author}</p>
    <p>{frontmatter.date}</p>
    {children}
  </div>
)

export default withStyles(styles)(Article)
