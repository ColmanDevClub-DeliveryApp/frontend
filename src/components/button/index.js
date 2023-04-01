import React from "react";
import "./styles.css"

/**
 * 
 * @param {*} text this is the text
 * @param {*} type options: contained / outlined / none
 * @returns 
 */

const Button = ({text, type, size})=> {
    return (
        <div>
            <button className={`type-${type} size-${size}`}>{text}</button>
        </div>
    )
}

export default Button;