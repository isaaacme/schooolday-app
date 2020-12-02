import React from "react";
import Feature from "./Feature";
import Styles from "../styles/Features.module.css";

const Features = () => {
  return (
    <section className={Styles.Features}>
      <h2 className={Styles.SectionTitle}>
        Schooday is a Noise free Learning environment
      </h2>
      <Feature
        title="Tasks"
        text="This is where you can manage all your chores and homework"
      />
      <Feature
        title="Classes"
        text="This is where you can take note of all your live classes"
      />

      <Feature
        title="Questions"
        text="Interact and ask all the questions you need, while building a useful resource for posterity"
      />
    </section>
  );
};

export default Features;
