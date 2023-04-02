import React from "react";
import "./styles.css"

/**
 * 
 * @param {*} icon 
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / big
 * @param {*} onclick function
 */

const IconButton = ({icon, type="contained", size="normal", onclick}) => {
    return (
        <div>
            <button className={`type-${type} size-${size}`} onClick={onclick} >{icon}</button>
        </div>
    )
}

export default IconButton;