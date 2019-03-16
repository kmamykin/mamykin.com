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
  }
}

export default withStyles(styles)(NotebookPreview)
