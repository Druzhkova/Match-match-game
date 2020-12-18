import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Board } from '../components';
import { Card } from './components';

export function MainPage() {
  const [counter, setCounter] = useState(120);
  const history = useHistory();

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  const putZeroBeforeSingleDigits = (time) => (String(time).length === 1 ? `0${time}` : `${time}`);

  const timeFormat = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${putZeroBeforeSingleDigits(seconds)}`;
  };

  const goToUserPage = useCallback(() => {
    history.push('/user-profile');
  }, [history]);

  return (
    <Board headerIsVisible textHeaderButton="User interface" onClickHeaderButton={goToUserPage}>
      <Timer>
        {counter === 0 ? 'Time over' : (
          <div>
            Countdown:
            {' '}
            {timeFormat(counter)}
          </div>
        )}
      </Timer>
      <Container>
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
        <Card frontImg="/images/сhristmas-tree.jpg" backImg="/images/christmas_presents.jpg" />
      </Container>
    </Board>
  );
}

const Timer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  /* width: 90%; */
  color: #fff;
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
