import React from 'react';
import styled from 'styled-components';

export function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    background: #007597;
    color: #ffffff;
    border: none;
    box-shadow: 0 0 5px black;
    padding: 10px 30px;
    cursor: pointer;
    width: auto;
    min-width: 65px;
     &:hover {
      background:#0075AA;
       transform: translateY(-2px);
       box-shadow: 0 2px 0 #003b6b;
     }

     &:active {
      background:#007597;
      transform: translateY(-1px);
      box-shadow: 0 1px 0 #003b6b;
    }
`;
