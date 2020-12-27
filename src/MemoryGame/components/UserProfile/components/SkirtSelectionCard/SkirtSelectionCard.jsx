import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeSkirtCard } from '../../../../actions';
import { back1, back2, back3 } from '../../../../../assets/cards';

export function SkirtSelectionCard() {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(0);

  const getActivCard = useCallback((typeCard) => (activeCard === typeCard), [activeCard]);

  useEffect(() => {
    dispatch(changeSkirtCard(activeCard));
  }, [activeCard, dispatch]);

  const onClickFirstCard = useCallback(() => {
    setActiveCard(0);
  }, []);

  const onClickSecondCard = useCallback(() => {
    setActiveCard(1);
  }, []);

  const onClickThirdCard = useCallback(() => {
    setActiveCard(2);
  }, []);

  return (
    <Container>
      <Title>Skirt cards</Title>
      <Inner>
        <Image
          onClick={onClickFirstCard}
          styleActive={getActivCard(0)}
          src={back1}
        />
        <Image
          onClick={onClickSecondCard}
          styleActive={getActivCard(1)}
          src={back2}
        />
        <Image
          onClick={onClickThirdCard}
          styleActive={getActivCard(2)}
          src={back3}
        />
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  max-width: 420px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  background: #2f6d9f;
  box-shadow: 0 0 5px black;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 18px;
`;

const Image = styled.img`
  height: 130px;
${(props) => (props.styleActive ? `
  height: 140px;
  width: 120px;
  box-shadow: 0 0 10px black;
` : `
  height: 130px;
  width: 110px;
  box-shadow: 0 0 5px black;
`)}
  margin: 10px;
  cursor: pointer;
`;
