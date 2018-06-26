import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MarkdownRender from '@nteract/markdown'
import HighligtedCode from '../HighlightedCode'
import Image from '../Image'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {},
})

const headingLevels = {
  1: 'display2', // for h1
  2: 'display1', // for h2
  3: 'headline',
  4: 'title',
  5: 'subheading',
}

const headingComponents = {
  1: 'h1', // for h1
  2: 'h2', // for h2
  3: 'h3',
  4: 'h4',
  5: 'h5',
}

const createRenderers = ({ classes }) => ({
  paragraph: ({ children }) => (
    <Typography variant="body1" component="p" paragraph>
      {children}
    </Typography>
  ),
  heading: ({ level, children }) => (
    <Typography
      variant={headingLevels[level]}
      component={headingComponents[level]}
      paragraph
    >
      {children}
    </Typography>
  ),
  code: ({ language, value }) => (
    <HighligtedCode language={language}>{value}</HighligtedCode>
  ),
  list: ({ children, ordered, ...rest }) => (
    <Typography
      variant="body1"
      component={ordered ? 'ol' : 'ul'}
      data-rest={JSON.stringify(rest)}
    >
      {children}
    </Typography>
  ),
  image: props => <Image {...props} data-props={JSON.stringify(props)} />,
})

class Markdown extends React.Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
  }
  render() {
    const { source, classes } = this.props
    const renderers = createRenderers({ classes })
    return (
      <MarkdownRender
        className={classes.root}
        source={source}
        renderers={renderers}
      />
    )
  }
}

export default withStyles(styles)(Markdown)
