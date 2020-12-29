import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button } from '../../../../components';
import { changeWidthGameBoard } from '../../../MainPage/actions';

export function GameDifficultyCard() {
  const [widthGameBoard, setWidthGameBoard] = useState(650);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeWidthGameBoard(widthGameBoard));
  }, [dispatch, widthGameBoard]);

  const getButtonBackgroundColor = useCallback((typeButton) => (widthGameBoard === typeButton ? '#28608f' : '#5da0d6'), [widthGameBoard]);

  const onClickLowLevelButton = useCallback(() => {
    setWidthGameBoard(650);
  }, []);

  const onClickMediumLevelButton = useCallback(() => {
    setWidthGameBoard(780);
  }, []);

  const onClickHightLevelButton = useCallback(() => {
    setWidthGameBoard(1040);
  }, []);

  return (
    <Container>
      <Title>Game Difficulty</Title>
      <StyledButton
        onClick={onClickLowLevelButton}
        background={getButtonBackgroundColor(650)}
      >
        Low (5*2)
      </StyledButton>
      <StyledButton
        onClick={onClickMediumLevelButton}
        background={getButtonBackgroundColor(780)}
      >
        Medium (6*3)
      </StyledButton>
      <StyledButton
        onClick={onClickHightLevelButton}
        background={getButtonBackgroundColor(1040)}
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
  min-width: 143px;
  background: ${(props) => props.background}
`;
