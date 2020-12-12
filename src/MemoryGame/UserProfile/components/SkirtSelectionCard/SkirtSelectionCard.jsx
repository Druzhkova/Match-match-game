import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { chooseSkirtCard } from '../../actions';

export function SkirtSelectionCard() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title>Skirt cards</Title>
      <div>
        <Image onClick={() => dispatch(chooseSkirtCard('сhristmas-tree'))} src="/images/сhristmas-tree.jpg" />
        <Image onClick={() => dispatch(chooseSkirtCard('snow-maiden'))} src="/images/snow-maiden.jpg" />
        <Image onClick={() => dispatch(chooseSkirtCard('santa-claus'))} src="/images/santa-claus.jpg" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px; 
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
  font-size: 18px;
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
