import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/Layout"
import Notebook from "../components/Notebook"
import Markdown from "../components/Markdown"
import Image from "../components/Image"
import DisqusThread from "../components/DisqusThread"

const CoverImage = ({ src }) => (
  <div
    css={css`
      margin-bottom: ${rhythm(1)};
    `}
  >
    <Image src={src} />
  </div>
)
export default ({ data }) => {
  const { site, post } = data
  return (
    <Layout>
      {post.frontmatter.title && <h1>{post.frontmatter.title}</h1>}
      {post.frontmatter.image && <CoverImage src={post.frontmatter.image} />}
      <div>
        {post.content.type === "Notebook" && (
          <Notebook notebook={JSON.parse(post.content.notebook)} />
        )}
        {post.content.type === "Markdown" && (
          <Markdown markdown={post.content.markdown} />
        )}
      </div>
      {
        process.env.NODE_ENV === 'production' && (
          <DisqusThread
            disqusShortname={site.siteMetadata.disqusShortname}
            url={site.siteMetadata.siteUrl + post.frontmatter.permalink}
            identifier={post.frontmatter.permalink}
            title={post.frontmatter.title}
          />
        )
      }
    </Layout>
  )
}

export const query = graphql`
  query($permalink: String!) {
    site {
      siteMetadata {
        siteUrl
        disqusShortname
      }
    }
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
