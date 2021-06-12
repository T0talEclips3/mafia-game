import React from "react";
import { Table } from "../Table";
import Row from "../Table/Row";
import { THead } from "../Table/THead";
import Container from "./Container";

//   tableContainer {
//     max-height: 27em;
//     overflow-y: scroll;
//     border: 1px solid var(--royal-blue);
//     border-radius: 4px;
//     border-collapse: collapse;
//   }

interface server {
  id: number;
  name: string;
  population: string;
  hostedBy: string;
}

const Browser = () => {
  const [servers, setServers] = React.useState<Array<server> | undefined>(
    undefined
  );
  const [checked, setChecked] = React.useState<string>("0");

  React.useEffect(() => {
    const fetchServers = async () => {
      const request = await fetch("http://localhost:3001/servers");
      const servers = await request.json();
      setServers(servers);
    };
    fetchServers();
  }, []);

  const handleForm = async () => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checked),
    });
    
    const result = await response.json();
  };
  return (
    <Container>
      <Table>
        <THead />
        <tbody>
          {servers?.map(({ hostedBy, id, name, population }) => {
            return (
              <Row
                key={id}
                checked={checked}
                setChecked={setChecked}
                hostName={hostedBy}
                population={population}
                serverId={`${id}`}
                serverName={name}
              />
            );
          })}
        </tbody>
      </Table>
      <button style={{ margin: "16px" }}>Select</button>
    </Container>
  );
};

export default Browser;
