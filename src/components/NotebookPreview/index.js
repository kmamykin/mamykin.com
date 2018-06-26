import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import HighligtedCode from '../HighlightedCode'
import Markdown from '../Markdown'
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
          <HighligtedCode language={language}>{source}</HighligtedCode>
        ),
        markdown: ({ source }) => <Markdown source={source} />,
        stream: ({ children }) => <pre>{children}</pre>,
        image: props => <img {...props} />,
        text: props => <pre {...props} />,
        html: ({ html }) => (
          <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        ),
        json: ({ json }) => (
          <HighligtedCode language="json">
            {JSON.stringify(json, null, 2)}
          </HighligtedCode>
        ),
      },
      notebook
    )
  }
}

export default withStyles(styles)(NotebookPreview)
