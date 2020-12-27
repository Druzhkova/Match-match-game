import React from 'react';
import { useSelector } from 'react-redux';
import { GameBoardView, Card, VictoryBoard } from './components';

export function GameBoard({
  cards, flipped, handleClick, disabled, solved, time,
}) {
  const statusGame = useSelector((state) => state.memoryGame.statusGame);

  switch (statusGame) {
    case 'running':
      return (
        <>
          {
          cards.map((card) => (
            <Card
              id={card.id}
              type={card.type}
              solved={solved.includes(card.id)}
              flipped={flipped.includes(card.id)}
              handleClick={() => handleClick(card.id)}
              disabled={disabled || solved.includes(card.id)}
            />
          ))
        }
        </>

      );

    case 'stopped':
      return (
        <GameBoardView
          boardType="start"
          title="Memory game!"
          text="Click anywhere to start!"
        />
      );

    case 'won':
      return (
        <GameBoardView
          boardType="victory"
          title="WELL DONE!"
          text="Click anywhere to try again!"
        >
          <VictoryBoard time={time} />
        </GameBoardView>
      );

    case 'lost':
      return (
        <GameBoardView
          boardType="defeat"
          title="Defeat!"
          text="Click anywhere to try again!"
        />
      );

    default: return '';
  }
}
