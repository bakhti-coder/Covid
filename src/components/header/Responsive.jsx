import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styles from "./Header.module.css";

export const Responsive = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={styles['hamburger']}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      {isOpen && (
        <ul className={styles["responsive-menu"]}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#articles">Articles</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Responsive;
