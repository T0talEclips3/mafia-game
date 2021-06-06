import React from "react";
import styled from "styled-components";
import { Table } from "./Table/Table";

const Wrapper = styled.div`
  color: white;
  max-width: 50em;
  margin: auto;
  .tableContainer {
    max-height: 27em;
    overflow-y: scroll;
    border: 1px solid var(--royal-blue);
    border-radius: 4px;
    border-collapse: collapse;
  }
`;

const GameBrowser = () => {
  const [servers, setServers] = React.useState<Array<object> | void>(undefined);

  React.useEffect(() => {
    const fetchServers = async () => {
      const request = await fetch("http://localhost:3001/servers");
      const servers = await request.json();
      setServers(servers);
    };
    fetchServers();
  }, []);

  return (
    <Wrapper>
      <div className='tableContainer'>
        <Table>
          <Table.THead />
          <tbody>
            {servers
              ? servers.map((server) => (
                  <tr>
                    <Table.Cell>
                      <Table.Label />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Label />
                    </Table.Cell>
                    <Table.Cell>
                      <Table.Input />
                    </Table.Cell>
                  </tr>
                ))
              : "unavailable"}
          </tbody>
        </Table>
      </div>
    </Wrapper>
  );
};

export default GameBrowser;
