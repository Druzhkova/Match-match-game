import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/prefer-default-export */
export function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
    background: #2CCCC0;
    color: white;
    border: none;
    box-shadow: 0 0.5px 0 #0d212e;
    padding: 10px 30px;
    cursor: pointer;
    width: auto;
    min-width: 65px;
     &:hover {
       background-color: #00b3a5;
       transform: translateY(-2px);
       box-shadow: 0 2px 0 #0d212e;
     }

     &:active {
      background-color: #00b3a5;
      transform: translateY(-1px);
      box-shadow: 0 1px 0 #0d212e;
    }
`;
