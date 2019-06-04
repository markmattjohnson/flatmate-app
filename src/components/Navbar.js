import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: turquoise;
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`;

function Navigationbar() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  );
}

export default Navigationbar;
