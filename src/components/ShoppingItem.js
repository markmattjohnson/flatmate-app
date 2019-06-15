import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  background-color: #72beb2;
  margin: 5px;
`;

const StyledProduct = styled.p`
  position: relative;
  left: 35px;
  top: -10px;
`;

export default function ShoppingItem({ name, image, onClick }) {
  console.log(name);
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
