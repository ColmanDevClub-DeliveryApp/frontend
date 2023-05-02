import React from "react";
import { useState } from "react";
import Style from "./styles.module.css"
import IconButton from "../IconButton";

/**
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / large
 * 
 */

const Counter = ({type="contained", size="normal"}) => {
    const [count, setCount] = useState(0);

    const addOne = ()=> {
        setCount(count+1);
    }
    const decreaseByOne = ()=> {
        if(count > 0) {
            setCount(count-1);
        }
    }
    
    return (
        <div className={Style.counter_container}>
            <IconButton icon={"+"} onclick={addOne} type={type} size={size}/>
            <span className={`${Style[size]} ${Style.span}`}>{count}</span>
            <IconButton icon={"-"} onclick={decreaseByOne} type={type} size={size}/>
        </div>
    )
}

export default Counter;