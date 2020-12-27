import React from 'react';
import { useSelector } from 'react-redux';

export function VictoryBoard({ time }) {
  const name = useSelector((state) => state.memoryGame.userData.name);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        {name}
        {': '}
        {time}
      </h1>
    </div>
  );
}
