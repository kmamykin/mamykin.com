import React from 'react'
import Article from '../components/Article'
import NotebookPreview from '../components/NotebookPreview'

// this prop will be injected by the GraphQL query below.
export default function NotebookArticle({ data }) {
  const { jupyterNotebook, site } = data // data.markdownRemark holds our post data
  const { rawNotebookBody, frontmatter } = jupyterNotebook
  const notebook = JSON.parse(rawNotebookBody)
  return (
    <Article frontmatter={frontmatter} siteMetadata={site.siteMetadata}>
      <NotebookPreview notebook={notebook} />
    </Article>
  )
}

export const query = graphql`
  query NotebookArticleByPath($path: String!) {
    site {
      siteMetadata {
        author
      }
    }
    jupyterNotebook(frontmatter: { permalink: { eq: $path } }) {
      rawNotebookBody
      frontmatter {
        permalink
        title
        date(formatString: "MMMM Do, YYYY")
        tags
      }
    }
  }
`
