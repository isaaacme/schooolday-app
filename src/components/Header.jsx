import React from "react";
import HeaderContent from "./HeaderContent";
import Styles from "../styles/Header.module.css";
import Nav from "./nav";

const Header = () => {
  return (
    <header className={Styles.Header}>
      <Nav />
      <HeaderContent />
    </header>
  );
};

export default Header;
