import React from "react";
import Link from "next/link";
import logo from "../assets/schooldaylogo.svg";
import LoginSignInButtons from "./LoginSignInButtons";
import Styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={Styles.Nav}>
      <Link href="/">
        <a className={Styles.Logo}>
          <img src={logo} alt="" />
        </a>
      </Link>
      <LoginSignInButtons />
    </nav>
  );
};

export default Nav;
