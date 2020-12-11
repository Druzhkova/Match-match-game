import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Board } from '../components';
import { GameDifficultyCard, SkirtSelectionCard } from './components';

export function LoginPage() {
  return (
    <>
      <Board>
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
