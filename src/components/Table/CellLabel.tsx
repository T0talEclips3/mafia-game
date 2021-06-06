import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  padding: 0.25em 0.5em;
`;

export const CellLabel = () => {
  return <StyledLabel htmlFor='qwe'>Server number three</StyledLabel>;
};
