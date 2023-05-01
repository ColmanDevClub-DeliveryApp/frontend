import React from "react";
import Style from "./styles.module.css";

const Loader = ({ isLoading, children }) => {
  return isLoading ? <div className={Style["loader"]}></div> : children;
};

export default Loader;
