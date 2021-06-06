import React from "react";
import styled from "styled-components";

const StyledTd = styled.td`
  position: relative;
  border: 0.5px solid var(--royal-blue);
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Cell: React.FC = ({ children }) => {
  return <StyledTd>{children}</StyledTd>;
};
