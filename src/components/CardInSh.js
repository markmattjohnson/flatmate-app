import React from "react";
import "../card.css";

export default function CardInSh(props) {
  return (
    <div className="box" onClick={props.onClickHandler} data-id={props.index}>
      {props.text}
    </div>
  );
}
