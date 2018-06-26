import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";

const Container = withStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center"
  },
  container: {
    width: "1208px",
    maxWidth: "1208px"
  }
}))(({ classes, children }) => (
  <div className={classes.root}>
    <div className={classes.container}>{children}</div>
  </div>
));

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  gutters: {
    padding: 0
  }
});

class FrontPageLayout extends React.Component {
  render() {
    const { classes, content } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Container>
            <Toolbar classes={{ gutters: classes.gutters }}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Kliment Mamykin's blog
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container>
          <Grid container spacing={8}>
            <Grid item xs={12} md={9}>
              {this.props.children}
            </Grid>
            <Grid item xs={12} md={3}>
              <div>
                <img src="/static/Kliment2.png" alt="photo" />
              </div>
              <div>{content}</div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(FrontPageLayout));
