import React from 'react'
import withRoot from '../withRoot'
import { withStyles } from '@material-ui/core/styles/index'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default withRoot(withStyles(styles)(NotFoundPage))
