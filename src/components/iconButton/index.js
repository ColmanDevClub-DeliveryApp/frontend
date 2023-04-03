import React from "react";
import Style from "./styles.module.css"

/**
 * @param {*} icon 
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / large
 * @param {*} onclick function
 */

const IconButton = ({icon="+", type="contained", size="normal", onclick}) => {

    return (
        <div className={Style.iconButton}>
            <button className={`${Style[type]} ${Style[size]}`} onClick={onclick} >{icon}</button>
        </div>
    )
}

export default IconButton;