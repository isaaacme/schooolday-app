import React from "react";
import LoginSignInButtons from "./LoginSignInButtons";
import Styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={Styles.Nav}>
      <img src="{logo}" alt="" />
      <LoginSignInButtons />
    </nav>
  );
};

export default Nav;
