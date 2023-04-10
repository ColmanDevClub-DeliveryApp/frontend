import React from 'react';
import Style from './styles.module.css';

/**
 * 
 * 
 */
const Input = ({type="text", placeholder="", overrides={}}) => {
    return (
            <>
                <input style={overrides} className={`${Style.input}`} type={type} placeholder={placeholder}></input>
            </>
    )
};

export default Input;
