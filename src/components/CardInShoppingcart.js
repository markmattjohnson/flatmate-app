import React from "react";
import "../card.css";

export default function CardInShoppingcart(props) {
  return (
    <div className="box" onClick={props.onClickHandler} data-id={props.index}>
      {props.text}
    </div>
  );
}
