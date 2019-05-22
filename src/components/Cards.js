import React, { Component } from "react";
import Card from "./Card";
export class Cards extends Component {
  render() {
    return (
      <div>
        <Card title="Card1" />
        <Card title="Card2" />
      </div>
    );
  }
}

export default Cards;
