import React from "react";
import styled from "styled-components";
import NavLink from "./NavigationLink";

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
      <Navigation>
        <NavLink exact to="/">
          Shopping
        </NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </Navigation>
    </StyledHeader>
  );
}

export default Navigationbar;
