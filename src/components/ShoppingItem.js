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
  background-color: papayawhip;
  margin: 5px;
`;

export default function ShoppingItem({ item, image, onClick }) {
  return (
    <StyledBox onClick={onClick}>
      <StyledImage src={image} alt="" />
    </StyledBox>
  );
}
