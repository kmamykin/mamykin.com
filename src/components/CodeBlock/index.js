import React from 'react'
import PropTypes from 'prop-types'

// need only a single promise that is run when this module is evaluated
const prismLoaded = import('./prismjs')

class CodeBlock extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    inline: PropTypes.bool,
    children: PropTypes.node.isRequired,
    async: PropTypes.bool
  }

  static defaultProps = {
    inline: false,
    language: 'markup',
    async: false
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
        <code ref={this.elementRef} className={`language-${language}`}>{children}</code>
      )
    } else {
      return (
        <div>
          <pre>
            <code ref={this.elementRef} className={`language-${language}`}>{children}</code>
          </pre>
        </div>
      )
    }
  }
}

export default CodeBlock

/*
*
        <Helmet onChangeClientState={this.handleChangeClientState}>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.js"
            type="text/javascript"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-python.js"
            type="text/javascript"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-jsx.js"
            type="text/javascript"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism-tomorrow.css"
            data-noprefix
          />
        </Helmet>

  handleScriptLoad = e => {
    this._hightlight()
  }

  handleChangeClientState = (newState, addedTags) => {
    const { scriptTags } = addedTags
    console.log(newState, addedTags)
    if (scriptTags) {
      const scriptTag = scriptTags[0]
      scriptTag.onload = this.handleScriptLoad
    }
  }

*/
