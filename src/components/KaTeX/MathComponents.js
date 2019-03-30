import React from "react"
import PropTypes from "prop-types"
import {
  InlineMath as KaTeXInlineMath,
  BlockMath as KaTeXBlockMath,
} from "react-katex"
import { css } from "@emotion/core"
import { compose } from "ramda"

const extractTexCommand = (regex, key) => ({ math, ...other }) => {
  const cmdMatch = regex.exec(math)
  if (cmdMatch) {
    return { ...other, math: math.replace(regex, ""), [key]: cmdMatch[1] }
  } else {
    return { ...other, math }
  }
}

const replaceEnvironment = (regex, replaceWith) => ({ math, ...other }) => {
  const envMatch = regex.exec(math)
  if (envMatch) {
    return { ...other, math: replaceWith(envMatch) }
  } else {
    return { ...other, math }
  }
}
const fixEquation = replaceEnvironment(
  /\\begin\{equation\}(.*)\\end\{equation\}/s,
  match => `\\begin{aligned}${match[1]}\\end{aligned}`
)
const fixAlign = replaceEnvironment(
  /\\begin\{align\*?\}(.*)\\end\{align\*?\}/s,
  match => `\\begin{aligned}${match[1]}\\end{aligned}`
)
const extractTag = extractTexCommand(/\\tag\{(.*?)\}/s, "tag")
const extractLabel = extractTexCommand(/\\label\{(.*?)\}/s, "label")
const extractRef = extractTexCommand(/\\ref\{(.*?)\}/s, "ref")
const extractEqRef = extractTexCommand(/\\eqref\{(.*?)\}/s, "eqref")

export class InlineMath extends React.Component {
  static propTypes = {
    math: PropTypes.string.isRequired,
  }
  render() {
    const { math, ref, eqref } = compose(
      extractEqRef,
      extractRef
    )({ math: this.props.math })
    if (ref) {
      return <a href={`#${ref}`}>{ref}</a>
    } else if (eqref) {
      return <a href={`#${eqref}`}>{`(${eqref})`}</a>
    } else {
      return <KaTeXInlineMath math={math} />
    }
  }
}

export class BlockMath extends React.Component {
  static propTypes = {
    math: PropTypes.string.isRequired,
  }
  render() {
    const { math, tag, label } = compose(
      extractLabel,
      extractTag,
      fixAlign,
      fixEquation,
    )({ math: this.props.math })
    const labelOrTag = label || tag
    return (
      <div
        css={css`
          position: relative;
        `}
      >
        {labelOrTag && (
          <div
            id={`${labelOrTag}`}
            css={css`
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              display: flex;
              align-items: center;
            `}
          >
            <span>{`(${tag})`}</span>
          </div>
        )}
        <KaTeXBlockMath math={math} />
      </div>
    )
  }
}
