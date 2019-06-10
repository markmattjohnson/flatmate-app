import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  background: white;
  color: rgb(64, 165, 219);
  border: 1px solid rgb(64, 165, 219);
  border-radius: 5px;
  text-decoration: none;
  margin: 0px 30px 30px 30px;
  padding: 5px;

  &.active {
    background: rgb(64, 165, 219);
    color: white;
  }
`;

export default NavLink;
