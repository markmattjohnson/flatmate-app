import React from "react";
import styled from "styled-components";

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

// TODO: use flexbox
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  background-color: papayawhip;
  margin: 5px;
`;

export default function ShoppingItem({ image, onClick }) {
  return (
    <StyledBox onClick={onClick}>
      <Image src={image} alt="" />
    </StyledBox>
  );
}
