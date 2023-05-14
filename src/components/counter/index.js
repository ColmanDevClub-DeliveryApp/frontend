import React from "react";
import { useState } from "react";
import Style from "./styles.module.css"
import IconButton from "../IconButton";

/**
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / large
 * 
 */

const Counter = ({type="contained", size="normal", onPlus, onMinus, amount=0}) => {
    
    return (
        <div className={Style.counter_container}>
            <IconButton icon={"+"} onclick={onPlus} type={type} size={size}/>
            <span className={`${Style[size]} ${Style.span}`}>{amount}</span>
            <IconButton icon={"-"} onclick={onMinus} type={type} size={size}/>
        </div>
    )
}

export default Counter;