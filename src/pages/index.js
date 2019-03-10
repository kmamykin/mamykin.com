import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { rhythm } from "../utils/typography"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/about/">About</Link>

    <h4>{data.allPost.totalCount} Posts</h4>
    {data.allPost.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.frontmatter.path}
          css={css`text-decoration: none; color: inherit;`}
        >
          <h3 css={css`margin-bottom: ${rhythm(1 / 4)};`}>
            {node.frontmatter.title}{" "}
            <span css={css`color: #bbb;`}>
              — {node.frontmatter.date}
            </span>
          </h3>
          <p>{node.content.excerpt}</p>
        </Link>
      </div>
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
            title
            slug
            path
            date(formatString: "DD MMMM, YYYY")
          }
          content {
            excerpt
          }
        }
      }
    }
  }
`
