import React from 'react';
import styled from 'styled-components';

export function Button({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>{ children }</StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  margin: 15px 0 0 0;
  padding: 10px 16px;
    font-size: 16px;
    color: white;
    border: none;
    border-radius: 6px;
    background: #5da0d6;
    box-shadow: 0 2px 0 #215076;

  &:hover {
    background: #28608f;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #215076;
  }
`;
