import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

export function GameBoardView({
  boardType, title, text, children,
}) {
  const widthBoard = useSelector((state) => state.memoryGame.widthGameBoard);

  return (
    <Screen background={boardType} width={widthBoard}>
      <div style={{ textAlign: 'center' }}>
        <h1>{title}</h1>
        {children}
        <p>{text}</p>
      </div>
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => (props.width === 650 ? 360 : 540)}px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  background: ${(props) => {
    switch (props.background) {
      case 'start': return '#dcdcdc';
      case 'victory': return '#a8db8f';
      case 'defeat': return '#ff6666';
      default: return 'none';
    }
  }};
`;
