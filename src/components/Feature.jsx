import React from "react";
import Styles from "../styles/Feature.module.css";

const Feature = ({ title, text, img, alt }) => {
  return (
    <article className={Styles.Feature}>
      <h3>{title}</h3>
      <p>{text}</p>
      <img src={img} alt={alt} />
    </article>
  );
};

export default Feature;
