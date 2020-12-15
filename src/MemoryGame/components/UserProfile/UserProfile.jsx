import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, Board } from '../components';
import { GameDifficultyCard, SkirtSelectionCard } from './components';
import { logout as logoutAction } from '../AuthorizationPage/actions';

export function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = useCallback(() => {
    dispatch(logoutAction());
    history.push('/');
  }, [dispatch, history]);

  const goToMainPage = useCallback(() => {
    history.push('/main');
  }, [history]);

  return (
    <>
      <Board>
        <Container>
          <div>
            <Button onClick={logout}>Logout</Button>
            <Button onClick={goToMainPage}>Start Game</Button>
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
