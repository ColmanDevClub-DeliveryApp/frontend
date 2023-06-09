import React from "react";
import Style from "./styles.module.css";

/**
 *
 * @param {*} text this is the text
 * @param {*} type options: contained / outlined / none
 * @param {*} size options: small / normal / large
 * @param {*} onclick function
 * @param {*} fullWidth add this to the props to make the button 100% width
 */

const Button = ({
  text = "",
  type = "contained",
  size = "normal",
  onclick,
  fullWidth = false,
  overrides = {},
  children,
  isDanger,
}) => {
  return (
    <button style={overrides} className={`${Style[type]} ${Style[size]} ${ fullWidth ? Style.fullWidth : ""} ${isDanger && Style.danger}`} onClick={onclick}>{children} {text}</button>
  );
};

export default Button;
