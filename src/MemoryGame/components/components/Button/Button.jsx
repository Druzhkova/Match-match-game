import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout as logoutAction } from '../../../actions';

export function Button({
  children, onClick, type, ...restProps // className
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickHundler = useCallback(() => {
    if (type === 'logout') {
      dispatch(logoutAction());
      history.push('/');
    }
    if (onClick) {
      onClick();
    }
  }, [type, dispatch, onClick, history]);

  return (
    <StyledButton
      customType={type}
      onClick={onClickHundler}
      {...restProps}
    >
      { children }

    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: auto;
  margin: 15px 5px 0;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 6px;
  box-shadow: 0 2px 0 #215076;
  background: #5da0d6;

  &:hover {
    background: #28608f;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #215076;
  }
`;
