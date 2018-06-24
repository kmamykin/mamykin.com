import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.permalink}>({post.frontmatter.title})</Link>
  </div>
)
const IndexPage = ({
  classes,
  data: { allMarkdownRemark, allJupyterNotebook },
}) => {
  const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Notebooks = allJupyterNotebook.edges.map(edge => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <div className={classes.root}>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>{Posts}</div>
      <div>{Notebooks}</div>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  )
}

export default withStyles(styles)(IndexPage)

export const query = graphql`
  query IndexQuery {
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
