import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  background: mediumseagreen;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 0px 5px 0px 5px;
  padding: 5px;

  &:hover {
    background: yellow;
  }

  &.active {
    background: teal;
  }
`;

export default NavLink;
