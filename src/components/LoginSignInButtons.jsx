import React from "react";
import Button from "./Button";
import Styles from "../styles/Button.module.css";
const LoginSignInButtons = () => {
  return (
    <div>
      <Button text="login" className={Styles.Button} />
      <Button text="signup" className={Styles.Button} />
    </div>
  );
};

export default LoginSignInButtons;
