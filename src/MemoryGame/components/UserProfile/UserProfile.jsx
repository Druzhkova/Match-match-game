import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Board } from '../components';
import { GameDifficultyCard, SkirtSelectionCard } from './components';

export function UserProfile() {
  const history = useHistory();

  const goToMainPage = useCallback(() => {
    history.push('/memory-game');
  }, [history]);

  return (
    <Board>
      <ButtonContainer>
        <StyledButton>
          <Button onClick={goToMainPage}>Start Game</Button>
        </StyledButton>
        <StyledButton>
          <Button type="logout">Logout</Button>
        </StyledButton>
      </ButtonContainer>
      <Container>
        <RulesGame>
          <h2>How to play:</h2>
          <p>Memory is a counter game where the object is to find pairs.</p>
          <p>When the game begins, all pictures are hidden.</p>
          <h2>To play:</h2>
          <ol>
            <li>Select two cards to try to match the pictures.</li>
            <li>If you match the pictures you can go again.</li>
            <li>If they do not match it is the computer turn them.</li>
            <li>The player that finds all pairs wins!</li>
            <li>Have Fun!</li>
          </ol>
        </RulesGame>
        <CardContainer>
          <GameDifficultyCard />
          <SkirtSelectionCard />
        </CardContainer>
      </Container>
    </Board>
  );
}

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  width: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.div`
  width: auto
`;

const RulesGame = styled.div`
  color: white;
  margin-bottom: 25px;
`;
