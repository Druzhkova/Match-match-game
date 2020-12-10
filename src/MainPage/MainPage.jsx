import React from 'react';
import { Button, Board } from '../components';
import { Card } from './components';

export function MainPage() {
  return (
    <>
      <Button>New Game</Button>
      <Board>
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
      </Board>
    </>
  );
}
