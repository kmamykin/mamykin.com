import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data, pageContext }) => {
  console.log(data)
  console.log(pageContext)
  const post = data.jupyterNotebook
  return (
    <Layout>
      <div>
        <h1>{post.metadata.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    jupyterNotebook(fields: { slug: { eq: $slug } }) {
      html
      metadata {
        title
      }
    }
  }
`
