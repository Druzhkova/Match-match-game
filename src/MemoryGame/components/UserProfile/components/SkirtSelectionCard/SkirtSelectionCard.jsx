import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeSkirtCard } from '../../../../actions';
import { back1, back2, back3 } from '../../../../../assets/cards';

export function SkirtSelectionCard() {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState(0);

  const getCardBoxShadow = useCallback((typeCard) => (activeCard === typeCard ? '0 0 10px black' : '0 0 5px black'), [activeCard]);

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
      <div>
        <Image onClick={onClickFirstCard} boxShadow={getCardBoxShadow(0)} src={back1} />
        <Image onClick={onClickSecondCard} boxShadow={getCardBoxShadow(1)} src={back2} />
        <Image onClick={onClickThirdCard} boxShadow={getCardBoxShadow(2)} src={back3} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  background: #2f6d9f;
  box-shadow: 0 0 5px black;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 18px;
`;

const Image = styled.img`
  width: 100px;
  margin: 10px;
  cursor: pointer;
  box-shadow: ${(props) => props.boxShadow};
`;
