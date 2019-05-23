import React from "react";
import Card from "./Card";
const Cards = props => {
  return (
    <div>
      <Card title="Zuletzt verwendet" clickHandler={props.clickHandler} />
      <Card title="Obst & Gemüse" />
    </div>
  );
};

export default Cards;
