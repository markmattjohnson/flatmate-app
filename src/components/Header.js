import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  grid-row: 1;
`;

const HeaderImage = styled.img`
  width: 100%;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderImage src="/images/header.jpg" alt="kitchen" />
    </HeaderContainer>
  );
}

export default Header;
