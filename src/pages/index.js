import React from 'react'
import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const PostLink = ({ post }) => (
  <div>
    <Link to={post.fields.path}>
      ({post.fields.path})
    </Link>
  </div>
)
const IndexPage = ({
  classes,
  data: {
    allMarkdownRemark,
    allJupyterNotebook
  },
}) => {
  const Posts = allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  const Notebooks = allJupyterNotebook.edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

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

export default withRoot(withStyles(styles)(IndexPage))

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            path
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
    allJupyterNotebook {
      edges {
        node {
          id
          fields {
            path
          }
        }
      }
    }
  }
`
