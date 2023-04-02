import React from "react";
import { useState } from "react";
import "./styles.css"
import IconButton from "../iconButton";

/**
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / big
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
        <div className="counter-container">
            <IconButton icon={"+"} onclick={addOne} type={type} size={size}/>
            <span className={`size-${size}`}>{count}</span>
            <IconButton icon={"-"} onclick={decreaseByOne} type={type} size={size}/>
        </div>
    )
}

export default Counter;