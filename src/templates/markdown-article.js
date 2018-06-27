import React from 'react'
import Article from '../components/Article'
import Markdown from '../components/Markdown'

// this prop will be injected by the GraphQL query below.
export default function MarkdownArticle({ data }) {
  const { markdownRemark, site } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody } = markdownRemark
  return (
    <Article frontmatter={frontmatter} siteMetadata={site.siteMetadata}>
      <Markdown source={rawMarkdownBody} />
    </Article>
  )
}

export const query = graphql`
  query MarkdownArticleByPath($path: String!) {
    site {
      siteMetadata {
        author
      }
    }
    markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      rawMarkdownBody
      frontmatter {
        permalink
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`
