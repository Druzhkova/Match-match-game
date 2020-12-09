import React from 'react';
import { Button, Card, Board } from './components';

function App() {
  return (
    <>
      <Button>New Game</Button>
      <Board>
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
      </Board>
    </>
  );
}

export default App;
