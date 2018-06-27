import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'

const styles = theme => ({
  root: {
  },
})

class Footer extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        Copyright © 2008 Kliment Mamykin
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
