import React from "react";
const BigContent = ({ title, text, img }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
      <img src={img} alt="" />
    </article>
  );
};

export default BigContent;
