import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Notebook from "../components/Notebook"
import Markdown from "../components/Markdown"

export default ({ data }) => {
  const post = data.post
  return (
    <Layout>
      {post.frontmatter.title && <h1>{post.frontmatter.title}</h1>}
      <div>
        {post.content.type === "Notebook" && (
          <Notebook notebook={JSON.parse(post.content.notebook)} />
        )}
        {post.content.type === "Markdown" && (
          <Markdown markdown={post.content.markdown} />
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($permalink: String!) {
    post(frontmatter: { permalink: { eq: $permalink } }) {
      frontmatter {
        permalink
        title
        author
        date
        tags
      }
      content {
        type
        markdown
        notebook
      }
    }
  }
`
