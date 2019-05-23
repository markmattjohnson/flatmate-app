import React from "react";
import Card from "./Card";
const Cards = props => {
  return (
    <div>
      <Card title="Card1" clickHandler={props.clickHandler} />
      <Card title="Card2" />
    </div>
  );
};

export default Cards;
