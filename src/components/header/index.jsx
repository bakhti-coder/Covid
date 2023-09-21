import Button from "../button";
import { Responsive } from "./Responsive";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className={`container ${styles["nav-item"]}`}>
          <div className={styles["nav-child"]}>
            <a href="#logo">
              <img src={logo} alt="logo" />
            </a>
            <ul className={styles["nav-ul"]}>
              <li className={styles["nav-link"]}>
                <a className={styles["nav-link-child"]} href="#home">
                  Home
                </a>
              </li>
              <li className={styles["nav-link"]}>
                <a className={styles["nav-link-child"]} href="#about">
                  About
                </a>
              </li>
              <li className={styles["nav-link"]}>
                <a className={styles["nav-link-child"]} href="#services">
                  Services
                </a>
              </li>
              <li className={styles["nav-link"]}>
                <a className={styles["nav-link-child"]} href="#articles">
                  Articles
                </a>
              </li>
              <li className={styles["nav-link"]}>
                <a className={styles["nav-link-child"]} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["nav-right"]}>
            <a className={styles["nav-link-child"]} href="#card">
              Cart(0)
            </a>
            <Button text="Get a free quote" />
          </div>
          <div className={styles["responsive"]}>
            <Responsive />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
