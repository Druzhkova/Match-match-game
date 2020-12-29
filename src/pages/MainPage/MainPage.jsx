import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Board } from '../../components';
import { GameBoard } from './components';
import { changeStatusGame, resultsRequest } from './actions';

export function MainPage() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [counter, setCounter] = useState(90);

  const widthBoard = useSelector((state) => state.memoryGame.widthGameBoard);
  const statusGame = useSelector((state) => state.memoryGame.statusGame);
  const numberOfPairs = useSelector((state) => state.memoryGame.numberOfCardsPairs);

  const dispatch = useDispatch();
  const history = useHistory();

  const sameCardClicked = (id) => flipped.includes(id);
  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const handleClick = (id) => {
    if (sameCardClicked(id)) return;
    setDisabled(true);

    if (flipped.length === 0) {
      setFlipped([...flipped, id]);
      setDisabled(false);
    } else {
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setTimeout(() => {
          setSolved([...solved, flipped[0], id]);
          resetCards();
        }, 1500);
      } else {
        setTimeout(resetCards, 1500);
      }
    }
  };

  function shuffle(array) {
    const arr = [...array];

    for (let i = 0; i < array.length - 1; i++) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = temp;
    }

    return arr;
  }

  const initializeDeck = useCallback(() => {
    let id = 0;
    const arrCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
      .slice(0, numberOfPairs)
      .reduce((acc, type) => {
        acc.push({
          id: id++,
          type,
        });
        acc.push({
          id: id++,
          type,
        });
        return acc;
      }, []);

    return shuffle(arrCards);
  }, [numberOfPairs]);

  const goToUserPage = useCallback(() => {
    history.push('/user-profile');
  }, [history]);

  function handleStartingClick() {
    if (statusGame !== 'running') {
      setCards(initializeDeck());
      dispatch(changeStatusGame('running'));
      setCounter(90);
    }
  }

  useEffect(() => {
    dispatch(changeStatusGame('stopped'));
  }, [dispatch]);

  useEffect(() => {
    setFlipped([]);
    setSolved([]);
    setCards(initializeDeck());
  }, [statusGame, initializeDeck]);

  const putZeroBeforeSingleDigits = (time) => (String(time).length === 1 ? `0${time}` : `${time}`);

  const timeFormat = useCallback((time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${putZeroBeforeSingleDigits(seconds)}`;
  }, []);

  useEffect(() => {
    if (solved.length !== 0 && solved.length === cards.length) {
      dispatch(changeStatusGame('won'));
      dispatch(resultsRequest({
        name: JSON.parse(localStorage.getItem('isAuthorized'))
          ? JSON.parse(localStorage.getItem('isAuthorized')).name
          : 'Panda',
        time: timeFormat(counter),
      }));
    }
  }, [solved, cards, dispatch]);

  useEffect(() => {
    let timer;
    if (counter > 0 && statusGame === 'running') {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, statusGame, dispatch]);

  if (counter === 0) {
    dispatch(changeStatusGame('lost'));
  }

  return (
    <Board headerIsVisible textHeaderButton="User interface" onClickHeaderButton={goToUserPage}>
      {
        statusGame === 'running'
          ? (
            <Timer>
              <div>
                Countdown:
                {' '}
                {timeFormat(counter)}
              </div>
            </Timer>
          ) : null
      }
      <Container onClick={handleStartingClick} width={widthBoard}>
        <GameBoard
          cards={cards}
          flipped={flipped}
          handleClick={handleClick}
          disabled={disabled}
          solved={solved}
          gameTime={timeFormat(counter)}
        />
      </Container>
    </Board>
  );
}

const Container = styled.div`
  margin-top: 50px;
  width: ${(props) => props.width}px;
  display: flex;
  flex-wrap: wrap;
`;

const Timer = styled.div`
position: absolute;
top: 15px;
left: 15px;
color: #fff;
`;
