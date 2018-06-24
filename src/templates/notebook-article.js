import React from 'react'

// this prop will be injected by the GraphQL query below.
export default function NotebookArticle({ data }) {
  const { jupyterNotebook } = data // data.markdownRemark holds our post data
  const { rawNotebookBody, frontmatter } = jupyterNotebook
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <pre>
          <code>{rawNotebookBody}</code>
        </pre>
      </div>
    </div>
  )
}

export const query = graphql`
  query NotebookArticleByPath($path: String!) {
    jupyterNotebook(frontmatter: { permalink: { eq: $path } }) {
      rawNotebookBody
      frontmatter {
        permalink
        title
        date
        tags
      }
    }
  }
`
