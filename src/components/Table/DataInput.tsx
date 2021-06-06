import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  margin: 0;
  opacity: 15;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
`;

export const DataInput = () => {
  return <StyledInput type='radio' name='123' id='qwe' />;
};
