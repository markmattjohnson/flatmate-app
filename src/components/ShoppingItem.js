import React from "react";
import {
  StyledImage,
  StyledBox,
  StyledProduct
} from "../common/shoppingItemStyles";

export default function ShoppingItem({ name, image, onClick }) {
  return (
    <StyledBox
      onClick={() => {
        onClick();
      }}
    >
      {image ? (
        <StyledImage src={image} alt="" />
      ) : (
        <StyledProduct>{name}</StyledProduct>
      )}
    </StyledBox>
  );
}
