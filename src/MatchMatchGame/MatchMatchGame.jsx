import React from 'react';
import { Button, Card, Board } from '../components';

export function MatchMatchGame() {
  return (
    <>
      <Button>New Game</Button>
      <Board>
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
      </Board>
    </>
  );
}
