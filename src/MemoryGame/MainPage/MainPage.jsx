import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Board } from '../components';
import { Card } from './components';

export function MainPage() {
  return (
    <>
      <Link to="/login"><Button>Go to login page</Button></Link>
      <Board>
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
      </Board>
    </>
  );
}
