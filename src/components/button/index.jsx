import styles from "./Button.module.css";

const Button = ({ text, style }) => {
  return (
    <button style={style} className={`${styles["button"]} `}>
      {text}
    </button>
  );
};

export default Button;
