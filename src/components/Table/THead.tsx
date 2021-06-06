import styled from "styled-components";

const StyledTh = styled.th`
  border: 0.5px solid var(--royal-blue);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.25em 0.5em;
`;

export const THead = () => {
  return (
    <thead>
      <tr>
        <StyledTh>Server</StyledTh>
        <StyledTh>Players</StyledTh>
        <StyledTh>Hosted by</StyledTh>
      </tr>
    </thead>
  );
};
