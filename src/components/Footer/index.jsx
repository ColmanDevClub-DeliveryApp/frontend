import React from "react";
import Style from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.footerContent}>
        <p>Copyright © 2023 Delivery App</p>
        <p>
          Created by{" "}
          <a
            target="blank"
            href="https://www.linkedin.com/in/idan-asayag-47736722b/"
          >
            Idan Asayag
          </a>
          ,{" "}
          <a target="blank" href="https://www.linkedin.com/in/yuvalofek1/">
            Yuval Ofek
          </a>
          , and{" "}
          <a target="blank" href="https://www.linkedin.com/in/tal-mekler/">
            Tal Mekler
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
