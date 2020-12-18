import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../../components';
import { chooseDifficultyGame } from '../../actions';

export function GameDifficultyCard() {
  const [activeButton, setActiveButton] = useState({
    lowLevelButton: true,
    mediumLevelButton: false,
    hightLevelButton: false,
  });

  const dispatch = useDispatch();

  const onClickLowLevelButton = useCallback(() => {
    dispatch(chooseDifficultyGame('Low'));
    setActiveButton({
      ...activeButton, lowLevelButton: true, mediumLevelButton: false, hightLevelButton: false,
    });
  }, [dispatch, activeButton]);

  const onClickMediumLevelButton = useCallback(() => {
    dispatch(chooseDifficultyGame('Medium'));
    setActiveButton({
      ...activeButton, lowLevelButton: false, mediumLevelButton: true, hightLevelButton: false,
    });
  }, [dispatch, activeButton]);

  const onClickHightLevelButton = useCallback(() => {
    dispatch(chooseDifficultyGame('Hight'));
    setActiveButton({
      ...activeButton, lowLevelButton: false, mediumLevelButton: false, hightLevelButton: true,
    });
  }, [dispatch, activeButton]);

  return (
    <Container>
      <Title>Game Difficulty</Title>
      <StyledButton
        active={activeButton.lowLevelButton}
        onClick={onClickLowLevelButton}
      >
        Low (5*2)
      </StyledButton>
      <StyledButton
        active={activeButton.mediumLevelButton}
        onClick={onClickMediumLevelButton}
      >
        Medium (6*3)
      </StyledButton>
      <StyledButton
        active={activeButton.hightLevelButton}
        onClick={onClickHightLevelButton}
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
`;
