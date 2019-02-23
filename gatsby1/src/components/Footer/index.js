import React from 'react'
import { withStyles } from '@material-ui/core/styles/index'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {},
})

class Footer extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Typography className={classes.root}>
        Copyright © 2008 Kliment Mamykin
      </Typography>
    )
  }
}

export default withStyles(styles)(Footer)
