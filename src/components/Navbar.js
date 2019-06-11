import React from "react";
import styled from "styled-components";
import NavLink from "./NavigationLink";

const Navigation = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: roboto;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-top: 10px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 100%
  );
`;

// const BlurredBackground = styled.div`
//   position: absolute;
//   background: white;
//   opacity: 0.5;
//   bottom: -5px;
//   z-index: 10;
//   height: 60px;
//   width: 100%;
// `;

function Navigationbar() {
  return (
    <Navigation>
      <NavLink exact to="/">
        <h3>Shopping</h3>
      </NavLink>
      <NavLink to="/todos">
        <h3>Todos</h3>
      </NavLink>
    </Navigation>
  );
}

export default Navigationbar;
