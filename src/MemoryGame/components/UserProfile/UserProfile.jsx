import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Board } from '../components';
import { GameDifficultyCard, SkirtSelectionCard } from './components';
import { logout as logoutAction } from '../AuthorizationPage/actions';

export function UserProfile() {
  const dispatch = useDispatch();

  const logout = useCallback(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  return (
    <>
      <Board>
        <Container>
          <div>
            <Button onClick={logout}>Logout</Button>
            <Button>Start Game</Button>
          </div>
          <div>
            <GameDifficultyCard />
            <SkirtSelectionCard />
          </div>
        </Container>
      </Board>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
