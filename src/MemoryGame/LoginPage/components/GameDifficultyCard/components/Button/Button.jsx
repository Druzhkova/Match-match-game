import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export function Button({ children, onClick }) {
  const [backgroundButton, setBackgroundButton] = useState('#5da0d6');

  const onclickHandler = useCallback(() => {
    setBackgroundButton((color) => (color === '#5da0d6' ? '#1d5c8e' : '#5da0d6'));
    onClick();
  }, [setBackgroundButton, onClick]);

  return (
    <StyledButton background={backgroundButton} onClick={onclickHandler}>{ children }</StyledButton>
  );
}

const StyledButton = styled.button`
  width: 100%;
  padding: 5px 20px;
  margin: 5px 0;
  color: #fff;
  background: ${(props) => props.background};
  border: none;
  box-shadow: 0 0 5px black;

  &:hover {
    background:#1d5c8e;
  }

  &:active {
    box-shadow: 0 0 10px black;
  }

`;
