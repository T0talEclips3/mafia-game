import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.header`
  padding: 9px 18px;
  box-shadow: 0px 0.7px rgba(210, 210, 210, 0.3);
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
  padding: 0;
  display: inline-flex;
  justify-content: space-around;
  list-style: none;
  gap: 9px;
  margin: 0;
`;

const MenuListItem = styled.li`
  transition: background-color 0.25s ease-out;
  position: relative;
  :hover {
    cursor: pointer;
    background-color: rgba(210, 210, 210, 0.3);
    transition: background-color 0.25s ease-out;
    border-radius: 4px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -10.5px;
    left: 0;
    background-color: #0087ca;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  a {
    display: block;
    padding: 7px;
    text-decoration: none;
    color: white;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <MenuList>
        <MenuListItem>
          <Link to='/browse'>Browse</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to='/learn'>Learn</Link>
        </MenuListItem>
      </MenuList>
      <MenuList>
        <MenuListItem>
          <Link to='/signin'>Sign In</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to='/signup'>Sign Up</Link>
        </MenuListItem>
      </MenuList>
    </Wrapper>
  );
};

export default Header;
