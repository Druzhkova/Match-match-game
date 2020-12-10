import React from 'react';
import styled from 'styled-components';

export function GameDifficultyCard() {
  return (
    <Container>
      <Title>Game Difficulty</Title>
      <Button>Low (5*2)</Button>
      <Button>Medium (6*3)</Button>
      <Button>Hight (8*3)</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  background: #2f6d9f;
  box-shadow: 0 0 5px black;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  padding: 5px 20px;
  margin: 5px 0;
  color: #fff;
  background: #5da0d6;
  border: none;
  box-shadow: 0 0 5px black;

  &:hover {
    background:#1d5c8e;
  }

  &:active {
    background:#1d5c8e;
    box-shadow: 0 0 10px black;
  }

`;
