import React from "react";
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
  padding: 7px;
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
`;

const MenuListItemLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <MenuList>
        <MenuListItem>
          <MenuListItemLink>Browse</MenuListItemLink>
        </MenuListItem>
        <MenuListItem>
          <MenuListItemLink>Learn</MenuListItemLink>
        </MenuListItem>
      </MenuList>
      <MenuList>
        <MenuListItem>
          <MenuListItemLink>Sign In</MenuListItemLink>
        </MenuListItem>
        <MenuListItem>
          <MenuListItemLink>Sign Up</MenuListItemLink>
        </MenuListItem>
      </MenuList>
    </Wrapper>
  );
};

export default Header;
