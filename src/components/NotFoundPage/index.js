import React from "react";
import Style from "./style.module.css";
import Button from "../Button";

const NotFoundPage = () => {
  return (
    <section className={Style.page_404}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div className={Style["col-sm-sm-12"]}>
            <div
              className={`${Style["col-sm-10"]} ${Style["col-sm-offset-1"]} ${Style["text-center"]}`}
            >
              <div className={Style["four_zero_four_bg"]}>
                <h1 className={Style["text-center"]}>404</h1>
              </div>

              <div className={Style["contant_box_404"]}>
                <h3 className={Style["h2"]}>Look like you're lost</h3>

                <p className={Style.p}>
                  the page you are looking for not avaible!
                </p>

                <div className={Style.button}>
                  <Button text="Go to Home" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
