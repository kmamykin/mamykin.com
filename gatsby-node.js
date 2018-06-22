const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  if (['MarkdownRemark', 'JupyterNotebook'].includes(node.internal.type)) {
    const relativePath = createFilePath({
      node,
      getNode,
      basePath: 'content/',
      trailingSlash: true,
    })
    console.log(`onCreateNode relativePath: ${relativePath}`)
    createNodeField({
      node,
      name: 'path',
      value: `/posts${relativePath}`,
    })
  }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
      allJupyterNotebook {
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(`src/templates/post.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
        },
      })
    })
    result.data.allJupyterNotebook.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: path.resolve(`src/templates/notebook.js`),
        context: {},
      })
    })
  })
}
