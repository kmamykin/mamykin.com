import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"


const PostCard = ({ node }) => (
  <div key={node.id}>
    <Link
      to={node.frontmatter.permalink}
      css={css`
            text-decoration: none;
            color: inherit;
          `}
    >
      <h3
        css={css`
              margin-bottom: ${rhythm(1 / 4)};
            `}
      >
        {node.frontmatter.title || node.frontmatter.permalink}
      </h3>
      <div
        css={css`
              color: #999;
            `}
      >
        <span>{node.frontmatter.author}{node.frontmatter.author && node.frontmatter.date ? ' - ' : null}{node.frontmatter.date}</span>
      </div>
      <p>{node.content.excerpt}</p>
    </Link>
  </div>
)

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {data.allPost.edges.map(({ node }) => (
      <PostCard node={node}/>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allPost(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            permalink
            title
            author
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          content {
            excerpt
          }
        }
      }
    }
  }
`
