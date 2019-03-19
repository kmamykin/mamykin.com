import React from "react"
import { Provider } from "@nteract/mathjax"

// http://docs.mathjax.org/en/latest/output.html
const MathJaxScriptSrc = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"

// http://docs.mathjax.org/en/latest/options/output-processors/index.html
const MathJaxOptions = {
  // jax: ["input/TeX", "output/SVG"],
  jax: ["input/TeX", "output/CommonHTML"], // <- use CommonHTML and not SVG for \tag rendered to be responsive (move as the width of the page changes)
  extensions: ["tex2jax.js", "MathMenu.js", "MathZoom.js", "fast-preview.js", "AssistiveMML.js", "a11y/accessibility-menu.js",],
  TeX: {
    // http://docs.mathjax.org/en/latest/options/input-processors/TeX.html#configure-tex
    extensions: ["AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js",],
    equationNumbers: {
      autoNumber: "none", // "none", "AMS", "all"
    },
  },
}

export default class MathJaxProvider extends React.Component {
  render() {
    return (
      <Provider src={MathJaxScriptSrc} options={MathJaxOptions}>
          {this.props.children}
      </Provider>
    )
  }
}
