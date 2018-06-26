import React from 'react'
import Markdown from '../components/Markdown'

// this prop will be injected by the GraphQL query below.
export default function MarkdownArticle({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, rawMarkdownBody } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <Markdown source={rawMarkdownBody}/>
      </div>
    </div>
  )
}

export const query = graphql`
  query MarkdownArticleByPath($path: String!) {
    markdownRemark(frontmatter: { permalink: { eq: $path } }) {
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
