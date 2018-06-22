import React from 'react'

// this prop will be injected by the GraphQL query below.
export default function NotebookTemplate({ data }) {
  const { jupyterNotebook } = data // data.markdownRemark holds our post data
  const { notebook } = jupyterNotebook
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <pre>
          <code>
            {JSON.stringify(notebook, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
query JupyterNotebookByPath($path: String!) {
    jupyterNotebook(fields: { path: { eq: $path } }) {
      fields {
        path
      }
      notebook {
        metadata {
          language_info {
            name
          }
        }
        cells {
          cell_type
          execution_count
          metadata {
            tags
          }
          source
          outputs {
            data {
              text_html
              text_plain
              image_png
            }
            output_type
            execution_count
            name
            text
          }
        }
      }
    }
  }
`
