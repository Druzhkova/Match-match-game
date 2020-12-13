import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components';
import { chooseDifficultyGame } from '../../actions';

export function GameDifficultyCard() {
  const dispatch = useDispatch();

  const chooseLevelLow = useCallback(() => {
    dispatch(chooseDifficultyGame('Low'));
  }, [dispatch]);

  const chooseLevelMedium = useCallback(() => {
    dispatch(chooseDifficultyGame('Medium'));
  }, [dispatch]);

  const chooseLevelHight = useCallback(() => {
    dispatch(chooseDifficultyGame('Hight'));
  }, [dispatch]);

  return (
    <Container>
      <Title>Game Difficulty</Title>
      <Button onClick={chooseLevelLow}>Low (5*2)</Button>
      <Button onClick={chooseLevelMedium}>Medium (6*3)</Button>
      <Button onClick={chooseLevelHight}>Hight (8*3)</Button>
    </Container>
  );
}

const Container = styled.div`
  max-width: 200px; 
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
