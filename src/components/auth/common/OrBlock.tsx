import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export interface IOrBlockProps {
  to: string;
}

const Container = styled.div`
  display: block;
  margin-top: 0.6em;
  position: relative;
  top: 0;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    top: 11px;
    background: rgba(210, 210, 210, 0.3);
  }
`;

const StyledSpan = styled.span`
  background-color: black;
  width: 30px;
  position: absolute;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-decoration: none;
  margin-top: 1.9em;
  text-align: center;
`;

const OrBlock: React.FC<IOrBlockProps> = ({ to }) => {
  const link = to.replace(" ", "").toLowerCase();

  return (
    <Container>
      <StyledSpan>Or</StyledSpan>
      <StyledLink to={`/${link}`}>{to}</StyledLink>
    </Container>
  );
};

export default OrBlock;
