import React from "react";
import Card from "./Card";

const Cards = props => {
  return (
    <div>
      <Card title="Obst & Gemüse" clickHandler={props.clickHandler} />
      <Card title="Brot & Gebäck" clickHandler={props.clickHandler} />
      <Card title="Milch & Käse" clickHandler={props.clickHandler} />
      <Card title="Fleisch & Fisch" clickHandler={props.clickHandler} />
      <Card title="Zutaten & Gewürze" clickHandler={props.clickHandler} />
      <Card title="Snacks & Süßes" clickHandler={props.clickHandler} />
      <Card title="Haushalt & Gesundheit" clickHandler={props.clickHandler} />
    </div>
  );
};

export default Cards;
