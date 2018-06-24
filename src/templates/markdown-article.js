import React from 'react'

// this prop will be injected by the GraphQL query below.
export default function MarkdownArticle({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query MarkdownArticleByPath($path: String!) {
    markdownRemark(frontmatter: { permalink: { eq: $path } }) {
      html
      rawMarkdownBody
      frontmatter {
        permalink
        title
        date
        tags
      }
    }
  }
`
