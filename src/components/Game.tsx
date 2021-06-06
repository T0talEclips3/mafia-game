import React from "react";
import styled from "styled-components";
import cardBack from "../assets/imgs/cardBackBlue.png";
import Purple from "../assets/imgs/purple.png";

const Container = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 50em;
`;

const Img = styled.img`
  display: block;
  height: 14em;
  &:hover {
    box-shadow: 0 0 4px 6px #ce1414;
  }
`;

const Game = () => {
  const [role, setRole] = React.useState<null | string>(cardBack);

  return (
    <Container>
      <Img
        onClick={() => {
          setRole(Purple);
        }}
        src={role ? role : cardBack}
        alt='card'
      />
      <Img src={cardBack} alt='card' />
      <Img src={cardBack} alt='card' />
    </Container>
  );
};

export default Game;
