const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  // const { createNodeField } = boundActionCreators
  //
  // if (['MarkdownRemark', 'JupyterNotebook'].includes(node.internal.type)) {
  //   const relativePath = createFilePath({
  //     node,
  //     getNode,
  //     basePath: 'content/',
  //     trailingSlash: true,
  //   })
  //   console.log(`onCreateNode relativePath: ${relativePath}`)
  //   createNodeField({
  //     node,
  //     name: 'path',
  //     value: `/posts${relativePath}`,
  //   })
  // }
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              permalink
              published
            }
          }
        }
      }
      allJupyterNotebook {
        edges {
          node {
            frontmatter {
              permalink
              published
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const createPageWith = (template) => ({ node }) => {
      createPage({
        path: node.frontmatter.permalink,
        component: path.resolve(template),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
        },
      })
    }
    result.data.allMarkdownRemark.edges.forEach(createPageWith('src/templates/markdown-article.js'))
    result.data.allJupyterNotebook.edges.forEach(createPageWith('src/templates/notebook-article.js'))
  })
}
