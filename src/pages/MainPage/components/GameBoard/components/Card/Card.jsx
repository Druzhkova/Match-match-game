import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, back1, back2, back3,
} from '../../../../../../assets/cards';

export function Card({
  handleClick, id, flipped, type, disabled, solved,
}) {
  const currentSkirts = useSelector((state) => state.memoryGame.skirtCard);

  const choseFrontImg = useMemo(() => {
    const img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    img.filter((image, index) => (((index === type)) ? image : null));
  }, [type]);

  const choseBackImg = useMemo(() => {
    const skirts = [back1, back2, back3];
    skirts.filter((image, index) => (index === currentSkirts ? image : null));
  }, [currentSkirts]);

  return (
    <>
      <FlipContainer
        onClick={() => (disabled ? null : handleClick(id))}
        solved={solved}
      >
        <Flipper
          flipped={flipped}
        >
          <FrontImg
            src={choseFrontImg}
          />
          <BackImg
            src={choseBackImg}
          />
        </Flipper>
      </FlipContainer>
    </>
  );
}

const FlipContainer = styled.div`
  perspective: 1000px;
  ${(props) => (props.solved ? `
    opacity: 0;
    ` : `
    display: inline-block;
    `)}
  margin: 5px;
  width: ${(props) => (props.width)}px;
  height: ${(props) => (props.height)}px;
`;

const Flipper = styled.div`
  transition: 1s;
  transform-style: preserve-3d;
  position: relative;
  width: 120px;
  height: 170px;

  ${(props) => (props.flipped ? `
    transform: rotateY(180deg);
  ` : '')}
`;

const FrontImg = styled.img`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
  z-index: 2;
  transform: rotateY(180deg);

`;

const BackImg = styled.img`
  backface-visibility: hidden;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  transform: rotateY(0deg);
`;
