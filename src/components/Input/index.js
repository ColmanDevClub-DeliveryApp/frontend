import React from 'react';
import Style from './styles.module.css';

/**
 * @param {*} type | String: the type of the input
 * @param {*} placeholder | String: the type of the input
 * @param {*} overrides | Object: using for change the style of the input
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
