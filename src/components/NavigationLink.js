import styled from "styled-components";
import { NavLink as RRDNavlink } from "react-router-dom";

const NavLink = styled(RRDNavlink)`
  display: flex;
  flex: wrap;
  height: 100px;
  width: 100px;
  justify-content: center;
  background: white;
  color: rgb(64, 165, 219);
  border: 1px solid rgb(64, 165, 219);
  border-radius: 5px;
  text-decoration: none;

  &.active {
    background: rgb(64, 165, 219);
    color: white;
  }
`;

export default NavLink;
