import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'

const styles = theme => ({
  root: {
  },
  img: {
    maxWidth: '100%',
  },
})

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string,
  }

  render() {
    const { src, classes, ...rest } = this.props

    return (
      <div className={classes.root}>
        <img className={classes.img} src={src} {...rest} />
      </div>
    )
  }
}

export default withStyles(styles)(Image)
