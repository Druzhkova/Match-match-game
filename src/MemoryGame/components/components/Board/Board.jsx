import React from 'react';
import styled from 'styled-components';

export function Board({ children }) {
  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;
  margin: 40px;
  padding: 50px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #fff;
    z-index: -1;
    background: linear-gradient(235deg, #2196f3, #010615, #2196f3);
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #fff;
    z-index: -1;
    filter: blur(40px);
    background: linear-gradient(235deg, #2196f3, #010615, #2196f3);
  }
`;
