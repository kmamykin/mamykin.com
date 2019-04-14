import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import Notebook from "../components/Notebook"
import Markdown from "../components/Markdown"
import Image from "../components/Image"

const CoverImage = ({src}) => (
  <div css={css`margin-bottom: ${rhythm(1)};`}>
    <Image src={src}/>
  </div>
)
export default ({ data }) => {
  const { post } = data
  return (
    <Layout>
      {post.frontmatter.title && <h1>{post.frontmatter.title}</h1>}
      {post.frontmatter.image && <CoverImage src={post.frontmatter.image}/>}
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
        image
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
