import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CodeBlock from '../CodeBlock'
import Markdown from '../Markdown'
import Image from '../Image'
import { renderNotebook } from './renderNotebook'

const styles = theme => ({
  root: {},
  cells: {},
  cell: {},
})

class NotebookPreview extends React.Component {
  static defaultProps = {
    notebook: {},
  }

  render() {
    const { notebook, classes } = this.props
    return renderNotebook(
      {
        root: ({ children }) => <div className={classes.root}>{children}</div>,
        cells: ({ children }) => (
          <div className={classes.cells}>{children}</div>
        ),
        code: ({ language, source }) => (
          <CodeBlock language={language}>{source}</CodeBlock>
        ),
        markdown: ({ source }) => <Markdown source={source} />,
        stream: ({ children }) => <pre>{children}</pre>,
        image: props => <Image {...props} />,
        text: props => <pre {...props} />,
        html: ({ html }) => (
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        ),
        json: ({ json }) => (
          <CodeBlock language="json">
            {JSON.stringify(json, null, 2)}
          </CodeBlock>
        ),
      },
      notebook
    )
  }
}

export default withStyles(styles)(NotebookPreview)
