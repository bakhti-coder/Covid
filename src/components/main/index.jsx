import React from "react";
import Button from "../button";
import mainimg from "../../assets/images/main.png";
import phone from "../../assets/images/phone.svg";
import styles from "./Main.module.css";

export const Main = () => {
  return (
    <section>
      <div className={styles["main-item"]}>
        <div className={`container ${styles["main-left"]}`}>
          <h1>Quality cleaning for your home</h1>
          <p>
            Condimentum mauris sit cursus amet id non neque pharetra nulla
            ornare sed facilisis senectus dapibus nibh ultrices eget suscipit
            aliquet et nulla magna lacus penatibus.
          </p>
          <div className={styles["main-bottom"]}>
            <div>
              <Button text="Get a free quote" />
            </div>
            <div className={styles["main-left-bottom"]}>
              <img src={phone} alt="" />
              <div className={styles["main-left-bottom-item"]}>
                <span>Call us now</span>
                <p>(414) 567 - 2109</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={mainimg} alt="images" />
        </div>
      </div>
    </section>
  );
};

export default Main;
