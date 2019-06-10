import React from "react";
import styled from "styled-components";
import NavLink from "./NavigationLink";

const StyledHeader = styled.header`
  background-color: white;
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  font-family: roboto;
`;

function Navigationbar() {
  return (
    <StyledHeader>
      <Navigation>
        <NavLink exact to="/">
          <h3>Shopping</h3>
        </NavLink>
        <NavLink to="/todos">
          <h3>Todos</h3>
        </NavLink>
      </Navigation>
    </StyledHeader>
  );
}

export default Navigationbar;
