import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  grid-row: 1;
  z-index: 100;
`;

const HeaderImage = styled.img`
  width: 100%;
  z-index: 100;
  @media (min-width: 1025px) {
    height: 210px;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderImage src="/images/header.jpg" alt="kitchen" />
    </HeaderContainer>
  );
}

export default Header;
