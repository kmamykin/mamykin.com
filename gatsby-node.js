/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const crypto = require("crypto")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createParentChildLink } = actions
  if (["MarkdownRemark", "JupyterNotebook"].includes(node.internal.type)) {
    const filePath = createFilePath({ node, getNode, basePath: "posts" })
    const defaultPath = `/posts${filePath}`
    const postNode = {
      id: `${node.id} >>> Post`,
      parent: node.id,
      children: [],
      frontmatter: {
        title: node.frontmatter.title,
        permalink: node.frontmatter.permalink || defaultPath,
        date: node.frontmatter.date,
        author: node.frontmatter.author,
        tags: node.frontmatter.tags || [],
      },
      content:
        node.internal.type === `MarkdownRemark`
          ? {
              type: "Markdown",
              markdown: node.rawMarkdownBody,
              excerpt: node.excerpt,
            }
          : {
              type: "Notebook",
              notebook: node.internal.content,
            },
      internal: {
        type: `Post`,
        contentDigest: node.internal.contentDigest,
      },
    }
    createNode(postNode)
    createParentChildLink({
      parent: node,
      child: postNode,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const results = await graphql(`
    {
      allPost {
        edges {
          node {
            frontmatter {
              permalink
            }
          }
        }
      }
    }
  `)
  results.data.allPost.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.permalink,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        permalink: node.frontmatter.permalink,
      },
    })
  })
}
