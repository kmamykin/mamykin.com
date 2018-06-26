import React from "react";
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles/index'
import Prism from 'prismjs';

const styles = theme => ({
  root: {}
});

class HighlightedCode extends React.Component {
  static propTypes = {
    language: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.elementRef = React.createRef();
  }

  componentDidMount() {
    this._hightlight()
  }

  componentDidUpdate() {
    this._hightlight()
  }

  _hightlight() {
    const node = this.elementRef.current;
    Prism.highlightElement(node, this.props.async)
  }

  render() {
    const { language, classes, children } = this.props;

    return (
      <pre className={`${classes.root} language-${language}`} ref={this.elementRef}>
        <code>{children}</code>
      </pre>
    );
  }
}

export default withStyles(styles)(HighlightedCode);
