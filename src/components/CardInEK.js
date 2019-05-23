import React from "react";
import styled from "styled-components";
import "../card.css";

export default function CardInEK(props) {
  return (
    <div className="box" onClick={props.onClickHandler} data-id={props.index}>
      {props.text}
    </div>
  );
}
