import React from "react";
import NavLink from "./NavigationLink";
import { Navigation } from "../common/navbarStyles";

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
