import React from "react"
import PropTypes from "prop-types"
// import { Provider } from "@nteract/mathjax"
import loadScript from "load-script"
/* global: MathJax */
// http://docs.mathjax.org/en/latest/output.html
const MathJaxScriptSrc = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"

// http://docs.mathjax.org/en/latest/options/output-processors/index.html
const MathJaxOptions = {
  // jax: ["input/TeX", "output/SVG"],
  jax: ["input/TeX", "output/CommonHTML"], // <- use CommonHTML and not SVG for \tag rendered to be responsive (move as the width of the page changes)
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js", "fast-preview.js", "AssistiveMML.js", "a11y/accessibility-menu.js",],
  tex2jax: {
    inlineMath: [["$", "$"], ["\\(", "\\)"]],
  },
  TeX: {
    // http://docs.mathjax.org/en/latest/options/input-processors/TeX.html#configure-tex
    extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js",],
    equationNumbers: {
      autoNumber: "AMS", // "none", "AMS", "all"
      formatNumber: n => n,
      formatTag: n => "(" + n + ")",
      formatID: n => "mjx-eqn-" + String(n).replace(/\s/g, "_"),
      formatURL: (id, base) => base + "#" + encodeURIComponent(id),
      useLabelIds: false // using tags and not labels as parameter "n" into the above functions
    },
  },
  //skipStartupTypeset: true, // MathJax.Node from "@nteract/mathjax" manages typesetting for each node
}

class Provider extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
  }
  static defaultProps = {
    input: "tex",
    didFinishTypeset: null,
    delay: 0,
    options: {},
    loading: null,
    noGate: false,
    onLoad: null,
    onError: err => { console.error(err) },
  }

  state = {
    MathJax: undefined,
    input: this.props.input,
    hasProviderAbove: true,
  }
  handleOnLoad = () => {
    const MathJax = window.MathJax
    if (typeof MathJax === "undefined" || !MathJax || !MathJax.Hub) {
      this.props.onError(
        new Error("MathJax not really loaded even though onLoad called")
      )
      return
    }
    const options = this.props.options
    if (options != null && Object.keys(options).length > 0) {
      MathJax.Hub.Config(options)
    }
    MathJax.Hub.Register.StartupHook("End", () => {
      if (typeof MathJax === "undefined" || !MathJax) {
        this.props.onError(
          new Error("MathJax became undefined in the middle of processing")
        )
        return
      }
      MathJax.Hub.processSectionDelay = this.props.delay
      if (this.props.didFinishTypeset) {
        this.props.didFinishTypeset()
      }
      // console.log(MathJax)
    })
    MathJax.Hub.Register.MessageHook("Math Processing Error", message => {
      this.props.onError(new Error(message))
    })
    // MathJax.Hub.Register.MessageHook("New Math",function (message) {
    //   const jax = MathJax.Hub.getJaxFor(message[1])
    //   const script = jax.SourceElement()
    //   console.log('New Math', message, jax, script, MathJax)
    // })
    // MathJax.Hub.Startup.signal.Interest(message => {console.log("Startup: ", message)})
    // MathJax.Hub.signal.Interest(message => {console.log("Hub: ", message)})
    if (this.props.onLoad) {
      this.props.onLoad()
    }
    this.setState({
      MathJax,
    })
  }

  componentDidMount() {
    const src = this.props.src
    const MathJax = window.MathJax
    if (typeof MathJax === "undefined" || !MathJax || !MathJax.Hub) {
      return loadScript(src, this.handleOnLoad)
    }
    this.handleOnLoad()
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

class DefaultProvider extends React.Component {
  render() {
    return (
      <Provider src={MathJaxScriptSrc} options={MathJaxOptions}>
        {this.props.children}
      </Provider>
    )
  }
}
export default DefaultProvider
