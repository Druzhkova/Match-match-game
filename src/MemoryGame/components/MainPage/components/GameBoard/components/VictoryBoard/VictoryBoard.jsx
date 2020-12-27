import React from 'react';
import { useSelector } from 'react-redux';

export function VictoryBoard({ gameTime }) {
  const results = useSelector((state) => state.memoryGame.playerResults);

  results.sort((a, b) => (a.time < b.time ? 1 : -1));

  return (
    <div style={{ textAlign: 'left', marginTop: 35, marginBottom: 35 }}>
      <p style={{ fontWeight: 'bold' }}>
        Your time :
        {' '}
        {gameTime}
      </p>
      <p>Results:</p>
      <ol>
        {
          results.slice(0, 5).map(({ name, time }) => (
            <li>
              {' '}
              {name}
              {': '}
              {time}
            </li>
          ))
        }
      </ol>
    </div>
  );
}
