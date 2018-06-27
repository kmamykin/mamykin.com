import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {},
  frontmatter: {},
  content: {
    marginTop: '10px',
  },
})

const Article = ({ frontmatter, siteMetadata, classes, children }) => (
  <div className={classes.root}>
    <div className={classes.frontmatter}>
      <Typography variant="display2" component="h1" paragraph>
        {frontmatter.title}
      </Typography>
      <Typography variant="subheading">
        <span>By </span>
        <span>{frontmatter.author || siteMetadata.author}</span>
        <span> </span>
        <span>{frontmatter.date}</span>
      </Typography>
    </div>
    <div className={classes.content}>{children}</div>
  </div>
)

export default withStyles(styles)(Article)
