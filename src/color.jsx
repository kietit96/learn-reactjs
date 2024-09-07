import React from "react"
import PropTypes from "prop-types"
function ColorPick(props) {
    const { color, ten} = props
    return (
        <div className="box-color" style={{ background: color }}></div>
    )
}

export default ColorPick