import React from "react";
import styled from "styled-components";
import { THead } from "./THead";
import { TableProvider } from "./TableContext";
import { Cell } from "./Cell";
import { CellLabel } from "./CellLabel";
import { DataInput } from "./DataInput";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  text-align: left;
`;

export interface ITableProps {
  children: React.ReactNode;
}

export const Table = ({ children }: ITableProps) => {
  const [selectedServer, setSelectedServer] = React.useState();

  return (
    <TableProvider value={{ selectedServer, setSelectedServer }}>
      <StyledTable>{children}</StyledTable>
    </TableProvider>
  );
};

Table.Cell = Cell;
Table.Label = CellLabel;
Table.THead = THead;
Table.Input = DataInput;