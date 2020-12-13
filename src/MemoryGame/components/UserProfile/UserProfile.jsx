import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
        <Button onClick={logout}>Logout</Button>
        <Link to="/main">
          <Button>Start Game</Button>
        </Link>
        <div>
          <GameDifficultyCard />
          <SkirtSelectionCard />
        </div>
      </Board>
    </>
  );
}
