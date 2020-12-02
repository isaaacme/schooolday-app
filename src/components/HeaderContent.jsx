import React from "react";
import Styles from "../styles/HeaderContent.module.css";
import Button from "./Button";

const HeaderContent = () => {
  return (
    <div className={Styles.HeaderContent}>
      <h1>Making your Schoolday fun again</h1>
      <p>
        Schoolday gives teachers and students a noise-free enviorment to
        communicate and learn.
      </p>
      <Button text="get started for free" className={Styles.ButtonCta}></Button>
    </div>
  );
};

export default HeaderContent;
