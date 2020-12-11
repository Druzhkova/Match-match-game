import React from 'react';
import styled from 'styled-components';

export function Board({ children }) {
  return <CardBoard>{children}</CardBoard>;
}

const CardBoard = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  margin: 50px;
  padding: 20px;
  background-color: #2c3e50;
  box-shadow: 3px 3px 5px black;
`;
