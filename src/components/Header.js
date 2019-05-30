import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: yellowgreen;
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
