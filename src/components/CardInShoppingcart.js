import React from "react";
import "../card.css";
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

export default function CardInShoppingcart(props) {
  return (
    <div
      className="box"
      onClick={props.onClickHandler}
      data-id={props.index}
      image={props.image}
    >
      <Image src={props.image} data-id={props.index} alt="" />
    </div>
  );
}
