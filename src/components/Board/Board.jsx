import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '../Button';
import { logout as logoutAction } from '../../pages/MainPage/actions';

export function Board({
  children, headerIsVisible = false, textHeaderButton, onClickHeaderButton, ...restProps
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickHundler = useCallback(() => {
    dispatch(logoutAction());
    history.push('/');
  }, [dispatch, history]);

  return (
    <Container {...restProps}>
      {
        headerIsVisible
          ? (
            <HeaderBoard>
              <Button onClick={onClickHeaderButton}>{ textHeaderButton }</Button>
              <Button onClick={onClickHundler}>Logout</Button>
            </HeaderBoard>
          )
          : null
      }
      <div>{children}</div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #060c21;
  margin: 40px;
  padding: 50px;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #fff;
    z-index: -1;
    background: linear-gradient(235deg, #2196f3, #010615, #2196f3);
  }

  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: #fff;
    z-index: -1;
    filter: blur(40px);
    background: linear-gradient(235deg, #2196f3, #010615, #2196f3);
  }
`;

const HeaderBoard = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
