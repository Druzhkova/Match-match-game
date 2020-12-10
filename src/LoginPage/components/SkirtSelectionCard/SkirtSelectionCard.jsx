import React from 'react';
import styled from 'styled-components';

export function SkirtSelectionCard() {
  return (
    <Container>
      <Title>Skirt cards</Title>
      <div>
        <Image src="/images/сhristmas-tree.jpg" />
        <Image src="/images/snow-maiden.jpg" />
        <Image src="/images/santa-claus.jpg" />
      </div>
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

const Image = styled.img`
  width: 100px;
  margin: 10px;
  cursor: pointer;
  box-shadow: 0 0 5px black;

  &:active {
    box-shadow: 0 0 10px black;
  }

`;
