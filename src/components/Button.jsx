import React from "react";
import Styles from "../styles/Button.module.css";
const Button = ({ text }) => {
  return <button className={Styles.Button}>{text}</button>;
};

export default Button;
