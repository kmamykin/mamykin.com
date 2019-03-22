import React from "react"
import PropTypes from "prop-types"
// import loadScript from "load-script"

class DefaultProvider extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default DefaultProvider
