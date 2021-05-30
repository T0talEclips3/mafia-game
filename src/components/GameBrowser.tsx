import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: white;
  text-align: left;
  max-width: 50em;
  margin: auto;
  max-height: 27em;
  overflow-y: scroll;
  border: 1px solid var(--royal-blue);
  border-radius: 4px;
  border-collapse: collapse;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  td,
  th {
    padding: 0.25em 0.5em;
    border: 0.5px solid var(--royal-blue);
    overflow: hidden;
    text-overflow: ellipsis;
  }
  tbody {
  }
  th {
    position: static;
  }
`;

const TableRow = styled.tr``;
const TableCell = styled.td``;
const TableHead = styled.thead``;
const TableBody = styled.tbody``;

const GameBrowser = () => {
  return (
    <Wrapper>
      <div className='tableContainer'>
        <Table>
          <thead>
            <tr>
              <th>Server</th>
              <th>Players</th>
              <th>Hosted by</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Server number two</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number three</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number four</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number five</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number six</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number seven</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number eight</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number nine</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>Server number ten</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
            <tr>
              <td>1234567890-1234567890-12345677890-</td>
              <td>10 / 14</td>
              <td>Hoster</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Wrapper>
  );
};

export default GameBrowser;
