import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Board } from '../components';
import { GameDifficultyCard, SkirtSelectionCard } from './components';

export function UserProfile() {
  const history = useHistory();

  const goToMainPage = useCallback(() => {
    history.push('/memory-game');
  }, [history]);

  return (
    <Board headerIsVisible textHeaderButton="Start Game" onClickHeaderButton={goToMainPage}>
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

const RulesGame = styled.div`
  color: white;
  margin-bottom: 25px;
`;
