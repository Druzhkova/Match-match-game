import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

export function Card({ frontImg, backImg }) { // add onClick
  const [rotateCard, setRotateCard] = useState(0);

  const onClickHandler = useCallback(() => {
    setRotateCard(180);
    // onClick();
  }, [setRotateCard]);

  return (
    <Container rotateCard={rotateCard}>
      <FrontCard><Image src={frontImg} onClick={onClickHandler} /></FrontCard>
      <BackCard><Image src={backImg} /></BackCard>
    </Container>
  );
}

const Container = styled.div`
  height: 140px;
  width: 110px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 1s;
  transform: rotateY(${(props) => props.rotateCard}deg);

  &:not(:last-child){
    margin-right: 15px;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const FrontCard = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const BackCard = styled.div`
  position: absolute;
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
`;
