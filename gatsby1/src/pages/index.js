import React from 'react'
import ArticleCard from '../components/ArticleCard'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
  },
  card: {}
})

const IndexPage = ({ classes, data }) => {
  const { allMarkdownRemark, allJupyterNotebook, site } = data
  const edges = [...allMarkdownRemark.edges, ...allJupyterNotebook.edges]
  const cards = edges.map(({node}) => (
    <Grid item xs={12}>
      <ArticleCard key={node.id} frontmatter={node.frontmatter} siteMetadata={site.siteMetadata} />
    </Grid>
  ))

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        {cards}
      </Grid>
    </div>
  )
}

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            permalink
            title
            date
            tags
          }
        }
      }
    }
    allJupyterNotebook {
      edges {
        node {
          id
          frontmatter {
            permalink
            title
            date
            tags
          }
        }
      }
    }
  }
`
