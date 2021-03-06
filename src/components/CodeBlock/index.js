import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import {rhythm} from "../../utils/typography"

// need only a single promise that is run when this module is evaluated
const prismLoaded = import("./prismjs")

export default class CodeBlock extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    inline: PropTypes.bool,
    children: PropTypes.node.isRequired,
    async: PropTypes.bool,
  }

  static defaultProps = {
    inline: false,
    language: `markup`,
    async: false,
  }

  constructor(props) {
    super(props)
    this.elementRef = React.createRef()
  }

  componentDidMount() {
    this.highlight()
  }

  componentDidUpdate() {
    this.highlight()
  }

  highlight = () => {
    const node = this.elementRef.current
    prismLoaded.then(({ Prism }) => {
      Prism.highlightElement(node, this.props.async)
    })
  }

  render() {
    const { language, inline, children } = this.props
    if (inline) {
      return (
        <code
          ref={this.elementRef}
          className={`language-${language}`}
          style={{ padding: `0.1em 0.4em` }}
        >
          {children}
        </code>
      )
    } else {
      return (
        <div css={css`margin-bottom: ${rhythm(1)};`}>
          <pre style={{ margin: `0` }}>
            <code ref={this.elementRef} className={`language-${language}`}>
              {children}
            </code>
          </pre>
        </div>
      )
    }
  }
}
