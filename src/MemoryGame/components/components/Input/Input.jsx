import React, { useCallback } from 'react';
import styled from 'styled-components';

export function Input({ onChangeText, value, placeholder }) {
  const onChange = useCallback((evt) => {
    onChangeText(evt.target.value);
  }, [onChangeText]);

  return <StyledInput onChange={onChange} value={value} placeholder={placeholder} />;
}

const StyledInput = styled.input`
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`;
