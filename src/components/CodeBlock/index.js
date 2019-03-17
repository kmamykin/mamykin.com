import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

// need only a single promise that is run when this module is evaluated
const prismLoaded = import("./prismjs")

const inlineFix = css`
  code[class*="language-"]& {
    padding: 0.1em 0.4em;
  }
`

export default class CodeBlock extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    inline: PropTypes.bool,
    children: PropTypes.node.isRequired,
    async: PropTypes.bool,
  }

  static defaultProps = {
    inline: false,
    language: "markup",
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
        <code ref={this.elementRef} className={`language-${language}`} css={inlineFix}>
          {children}
        </code>
      )
    } else {
      return (
        <div>
          <pre>
            <code ref={this.elementRef} className={`language-${language}`}>
              {children}
            </code>
          </pre>
        </div>
      )
    }
  }
}
