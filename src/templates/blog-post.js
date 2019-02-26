import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.post
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post(frontmatter: { slug: { eq: $slug } }) {
      content {
        html
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
