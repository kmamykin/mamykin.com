import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
  frontmatter: {
    paddingBottom: theme.spacing.unit * 3
  },
  content: {},
})

const Article = ({ frontmatter, siteMetadata, classes, children }) => (
  <Paper className={classes.root} elevation={1} square={true}>
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
  </Paper>
)

export default withStyles(styles)(Article)
