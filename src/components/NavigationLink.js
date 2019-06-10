import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  background: rgb(64, 165, 219);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin: 0px 30px 30px 30px;
  padding: 5px;

  &:hover {
    background: yellow;
  }

  &.active {
    background: teal;
  }
`;

export default NavLink;
