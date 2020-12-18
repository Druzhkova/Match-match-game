import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export function StartPage() {
  const [outlineIsVisible, setOutlineIsVisible] = useState(true);

  const history = useHistory();

  const showOutline = useCallback(() => {
    setOutlineIsVisible(true);
  }, [setOutlineIsVisible]);

  const hideOutline = useCallback(() => {
    setOutlineIsVisible(false);
  }, [setOutlineIsVisible]);

  const onClickHundler = useCallback(() => {
    history.push('/loginPage');
  }, [history]);

  return (
    <StartButton
      onMouseOut={showOutline}
      onMouseOver={hideOutline}
      onClick={onClickHundler}
    >
      {
        outlineIsVisible
          ? (
            <>
              <Span />
              <Span />
              <Span />
              <Span />
            </>
          )
          : null
      }
      <span>Start memory game</span>
    </StartButton>
  );
}

const Span = styled.span`
  position: absolute;
  overflow: hidden;

  &:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    transition: 1s;
    background: linear-gradient(to right, #0c002b, #2196f3);
    animation: animate1 2s linear infinite;
  }

  @keyframes animate1{
    0%{
      transform: translateX(-100%)
    }
    100%{
      transform: translateX(100%)
    }
  }

  &:nth-child(2) {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #0c002b, #2196f3);
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate2{
    0%{
      transform: translateY(-100%)
    }
    100%{
      transform: translateY(100%)
    }
  }

  &:nth-child(3) {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #0c002b, #2196f3);
    animation: animate3 2s linear infinite;
  }

  @keyframes animate3{
    0%{
      transform: translateX(100%)
    }
    100%{
      transform: translateX(-100%)
    }
  }

  &:nth-child(4) {
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #0c002b, #2196f3);
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4{
    0%{
      transform: translateY(100%)
    }
    100%{
      transform: translateY(-100%)
    }
  }

`;

const StartButton = styled.span`
  display: block;
  position: relative;
  padding: 15px 30px;
  color: #2196f3;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #031321, 0 0 80px #2196f3;
  }
`;
