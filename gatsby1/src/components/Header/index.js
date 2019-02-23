import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

import Link from 'gatsby-link'

import { withStyles } from '@material-ui/core/styles/index'

import avatar from './avatar.jpg'
console.log(avatar)
const styles = theme => ({
  root: {},
  avatar: {
    // margin: 10,
    // width: 30,
    // height: 30,
  },
  title: {
    marginLeft: '10px',
  },
  grow: {
    flex: '1 1 0',
  },
  gutters: {
    // padding: 0,
  },
})

// TODO: Animate header based on page scroll position.
// https://github.com/fisshy/react-scroll
// https://github.com/stutrek/scrollmonitor-react, https://github.com/stutrek/scrollMonitor
// https://github.com/ryanhefner/react-scroll-trigger
class Index extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Toolbar classes={{ gutters: classes.gutters }}>
        <Link to="/">
          <Avatar
            alt="Kliment Mamykin"
            src={avatar}
            className={classes.avatar}
          />
        </Link>
        <Hidden smDown>
          <Typography variant="title" color="inherit" className={classes.title}>
            {this.props.siteTitle}
          </Typography>
        </Hidden>

        <div className={classes.grow} />
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/about/">
          About
        </Button>
      </Toolbar>
    )
  }
}

export default withStyles(styles)(Index)
