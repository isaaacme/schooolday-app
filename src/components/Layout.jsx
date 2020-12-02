import React from "react";
import App from "../App";
import Styles from "../styles/Layout.module.css";

function Layout() {
  return (
    <div className={Styles.Layout}>
      <App></App>
    </div>
  );
}

export default Layout;
