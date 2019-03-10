import React from "react"
import Layout from "../components/layout"
import Notebook from "../components/notebook"
import Markdown from "../components/markdown"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.post
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        {post.content.type === "Notebook" && (
          <Notebook
            frontmatter={post.frontmatter}
            notebook={JSON.parse(post.content.notebook)}
          />
        )}
        {post.content.type === "Markdown" && (
          <Markdown
            frontmatter={post.frontmatter}
            markdown={post.content.markdown}
          />
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post(frontmatter: { slug: { eq: $slug } }) {
      parent {
        id
      }
      content {
        type
        markdown
        notebook
      }
      frontmatter {
        title
        slug
        path
      }
    }
  }
`
