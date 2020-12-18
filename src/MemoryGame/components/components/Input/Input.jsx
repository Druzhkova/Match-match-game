import React, { useCallback } from 'react';
import styled from 'styled-components';

export function Input({
  onChangeText, value, ...restProps
}) {
  const onChange = useCallback((evt) => {
    onChangeText(evt.target.value);
  }, [onChangeText]);

  return <StyledInput onChange={onChange} value={value} {...restProps} />;
}

const StyledInput = styled.input`
  width: 230px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 6px;
`;
