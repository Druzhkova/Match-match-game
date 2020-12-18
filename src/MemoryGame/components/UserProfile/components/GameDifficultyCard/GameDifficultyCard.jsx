import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components';
import { chooseDifficultyGame } from '../../actions';

export function GameDifficultyCard() {
  const [activeButton, setActiveButton] = useState('Low');
  const dispatch = useDispatch();

  const getButtonBackgroundColor = useCallback((typeButton) => (activeButton === typeButton ? '#28608f' : '#5da0d6'), [activeButton]);

  useEffect(() => {
    dispatch(chooseDifficultyGame(activeButton));
  }, [dispatch, activeButton]);

  const onClickLowLevelButton = useCallback(() => {
    setActiveButton('Low');
  }, []);

  const onClickMediumLevelButton = useCallback(() => {
    setActiveButton('Medium');
  }, []);

  const onClickHightLevelButton = useCallback(() => {
    setActiveButton('Hight');
  }, []);

  return (
    <Container>
      <Title>Game Difficulty</Title>
      <StyledButton
        onClick={onClickLowLevelButton}
        background={getButtonBackgroundColor('Low')}
      >
        Low (5*2)
      </StyledButton>
      <StyledButton
        onClick={onClickMediumLevelButton}
        background={getButtonBackgroundColor('Medium')}
      >
        Medium (6*3)
      </StyledButton>
      <StyledButton
        onClick={onClickHightLevelButton}
        background={getButtonBackgroundColor('Hight')}
      >
        Hight (8*3)
      </StyledButton>
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
  margin-right: 20px;
  color: #fff;
  background: #2f6d9f;
  box-shadow: 0 0 5px black;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  width: 100%;
  background: ${(props) => props.background}
`;
