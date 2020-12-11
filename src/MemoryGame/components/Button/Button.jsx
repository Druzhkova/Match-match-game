import React from 'react';
import styled from 'styled-components';

export function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    background: #5da0d6;
    letter-spacing: 1px;
    color: #ffffff;
    border: none;
    box-shadow: 0 0 5px black;
    padding: 10px 30px;
    cursor: pointer;
    width: auto;
    min-width: 65px;

     &:hover {
      background:#1d5c8e;
     }

     &:active {
      background:#1d5c8e;
      box-shadow: 0 0 10px black;
    }
`;
