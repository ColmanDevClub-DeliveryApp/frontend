import React from "react";
import "./styles.css"

/**
 * 
 * @param {*} text this is the text
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / big
 * @param {*} onclick function
 * @param {*} fullWidth add this to the props to make the button 100% width
 */

const Button = ({text, type, size, onclick, fullWidth=false}) => {
    return (
        <div>
            <button className={`type-${type} size-${size} ${fullWidth ? "fullWidth":""}`} onClick={onclick}>{text}</button>
        </div>
    )
}

export default Button;