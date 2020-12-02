import React from "react";
import BigContent from "./BigContent";
import One from "../assets/big-illustrations/Group 2053.svg";
import Two from "../assets/big-illustrations/Group 2059.svg";
import Styles from "../styles/Explainer.module.css";
const Explainer = () => {
  return (
    <section className={Styles.Explainer}>
      <BigContent
        className={Styles.BigContent}
        img={One}
        alt="big illustration"
        title="We are all re-learning to learn"
        text="The rise of remote education due to COVID has created the need for
        students and teachers alike to not only get familiar but use a chain of
        products that were never intended for such a wide types of people and
        levels of education, and the result is confusion, frustration and less
        time actually learning."
      />

      <BigContent
        img={Two}
        alt="big illustration"
        title="The classrom as a state of mind"
        text="As we keep going on and off the tracicional schools system, more and more students and teachers are getting fatigued and just check out, creating gaps in their education that will prove by any standard very difficult to recover."
        className={Styles.ContentFlip}
      />
    </section>
  );
};

export default Explainer;
