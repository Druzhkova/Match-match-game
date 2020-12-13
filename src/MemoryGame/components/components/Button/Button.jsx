import React from 'react';
import styled from 'styled-components';

export function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>{ children }</StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  padding: 5px 25px;
  margin: 15px 0 0 0;
  color: #fff;
  background: #5da0d6;
  border: none;
  font-size: 16px;
  box-shadow: 0 0 5px black;

  &:hover {
    background:#1d5c8e;
  }

  &:active {
    box-shadow: 0 0 10px black;
  }
`;
