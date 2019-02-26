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
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/` })
    const postNode = {
      id: `${node.id} >>> Post`,
      parent: node.id,
      children: [],
      frontmatter: {
        title: node.frontmatter.title,
        slug,
        path: `/posts${slug}`,
        date: node.frontmatter.date,
      },
      content: {
        html: node.html,
        markdown: node.rawMarkdownBody,
        excerpt: node.excerpt,
      },
      internal: {
        type: `Post`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node.rawMarkdownBody))
          .digest(`hex`),
        mediaType: node.internal.mediaType,
      },
    }
    createNode(postNode)
    createParentChildLink({
      parent: node,
      child: postNode
    })
  } else if (node.internal.type === `JupyterNotebook`) {
    const slug = createFilePath({ node, getNode, basePath: `content/` })
    const postNode = {
      id: `${node.id} >>> Post`,
      parent: node.id,
      children: [],
      frontmatter: {
        title: 'Notebook title',
        slug,
        path: `/posts${slug}`,
        date: '2019-01-01',
      },
      content: {
        html: node.html,
        notebook: node.internal.content,
        excerpt: 'Excerpt here'
      },
      internal: {
        type: `Post`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(node.html))
          .digest(`hex`),
        mediaType: node.internal.mediaType,
      },
    }
    createNode(postNode)
    createParentChildLink({
      parent: node,
      child: postNode
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const results = await graphql(`
    {
      allPost {
        edges {
          node {
            frontmatter {
              slug
              path
            }
          }
        }
      }
    }
  `)
  results.data.allPost.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
      },
    })
  })
}
