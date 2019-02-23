import React from 'react'
import MathJax from '@nteract/mathjax'

// http://docs.mathjax.org/en/latest/output.html
const MathJaxScriptSrc =
  'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js'

// http://docs.mathjax.org/en/latest/options/output-processors/index.html
const MathJaxOptions = {
  jax: ['input/TeX', 'output/SVG'],
  SVG: {
    scale: 100,
  },
}

class MathJaxContext extends React.Component {
  render() {
    return (
      <MathJax.Context src={MathJaxScriptSrc} options={MathJaxOptions}>
        {this.props.children}
      </MathJax.Context>
    )
  }
}

export default {
  Context: MathJaxContext,
}
