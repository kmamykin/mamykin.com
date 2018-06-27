import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'gatsby-link'

const styles = theme => ({
  root: {},
  frontmatter: {},
  content: {},
})

const ArticleCard = ({ frontmatter, siteMetadata, classes }) => (
  <Card className={classes.root}>
    <CardMedia
      className={classes.media}
      image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {frontmatter.title}
      </Typography>
      <Typography component="p">
        <span>By </span>
        <span>{frontmatter.author || siteMetadata.author}</span>
        <span> </span>
        <span>{frontmatter.date}</span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        component={Link}
        to={frontmatter.permalink}
      >
        Read
      </Button>
    </CardActions>
  </Card>
)

export default withStyles(styles)(ArticleCard)
