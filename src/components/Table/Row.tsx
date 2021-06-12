import React from "react";
import styled from "styled-components";

export interface IRowProps {
  serverName: string;
  population: string;
  hostName: string;
  serverId: string;
  checked: string;
  setChecked: Function;
}

interface TRProps {
  background: boolean;
}

const StyledTr = styled.tr`
  background-color: ${(props: TRProps) =>
    props.background ? `var(--royal-blue)` : "none"};
`;

const StyledTd = styled.td`
  position: relative;
  border: 0.5px solid var(--royal-blue);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledLabel = styled.label`
  display: block;
  padding: 0.25em 0.5em;
`;

const StyledInput = styled.input`
  display: inline-block;
  margin: 0;
  opacity: 0;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
`;

const Row: React.FC<IRowProps> = ({
  hostName,
  population,
  serverName,
  serverId,
  checked,
  setChecked,
}) => {
  const selected = checked === serverId;

  return (
    <StyledTr background={selected}>
      <StyledTd>
        {serverName}
        <StyledInput
          name='server'
          id={serverId}
          type='radio'
          checked={selected}
          onChange={(event) => {
            setChecked(event.currentTarget.id);
          }}
        />
      </StyledTd>
      <StyledTd>
        <StyledLabel htmlFor={serverId}>{population}</StyledLabel>
      </StyledTd>
      <StyledTd>
        <StyledLabel htmlFor={serverId}>{hostName}</StyledLabel>
      </StyledTd>
    </StyledTr>
  );
};

export default Row;
