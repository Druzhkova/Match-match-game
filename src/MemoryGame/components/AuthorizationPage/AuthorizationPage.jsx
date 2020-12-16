import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Board, Input } from '../components';
import { authorizationRequest } from './actions';

export function AuthorizationPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [displaySpan, setDisplaySpan] = useState('block');

  const [displayButton, setDisplayButton] = useState('flex');
  const [displayContainerForm, setDisplayContainerForm] = useState('none');

  const history = useHistory();

  const dispatch = useDispatch();

  const authorization = useCallback(() => {
    dispatch(authorizationRequest({ name, surname, email }));
    history.push('/user');
  }, [dispatch, name, surname, email, history]);

  const showButtonOutline = useCallback(() => {
    setDisplaySpan('block');
  }, [setDisplaySpan]);

  const hideButtonOutline = useCallback(() => {
    setDisplaySpan('none');
  }, [setDisplaySpan]);

  const onClickHundler = useCallback(() => {
    setDisplayButton('none');
    setDisplayContainerForm('flex');
  }, []);

  return (
    <>
      <StartButton
        display={displayButton}
        onMouseOver={hideButtonOutline}
        onMouseOut={showButtonOutline}
        onClick={onClickHundler}
      >
        <Span display={displaySpan} />
        <Span display={displaySpan} />
        <Span display={displaySpan} />
        <Span display={displaySpan} />
        <span>Start memory game</span>
      </StartButton>
      <Container display={displayContainerForm}>
        <Board>
          <Title>Fill out your profile</Title>
          <Form>
            <Input onChangeText={setName} value={name} type="text" placeholder="name" />
            <Input onChangeText={setSurname} value={surname} type="text" placeholder="surname" />
            <Input onChangeText={setEmail} value={email} type="email" placeholder="email" />
            <Button onClick={authorization}>Save</Button>
          </Form>
        </Board>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: ${(props) => props.display};
  color: #fff;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1.3px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Span = styled.span`
  display: ${(props) => props.display};
  position: absolute;
  overflow: hidden;

  &:nth-child(1) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 2px;
    transition: 1s;
    background: linear-gradient(to right, #0c002b, #2196f3);
    animation: animate1 2s linear infinite;
  }

  @keyframes animate1{
    0%{
      transform: translateX(-100%)
    }
    100%{
      transform: translateX(100%)
    }
  }

  &:nth-child(2) {
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #0c002b, #2196f3);
    animation: animate2 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate2{
    0%{
      transform: translateY(-100%)
    }
    100%{
      transform: translateY(100%)
    }
  }

  &:nth-child(3) {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to left, #0c002b, #2196f3);
    animation: animate3 2s linear infinite;
  }

  @keyframes animate3{
    0%{
      transform: translateX(100%)
    }
    100%{
      transform: translateX(-100%)
    }
  }

  &:nth-child(4) {
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to top, #0c002b, #2196f3);
    animation: animate4 2s linear infinite;
    animation-delay: 1s;
  }

  @keyframes animate4{
    0%{
      transform: translateY(100%)
    }
    100%{
      transform: translateY(-100%)
    }
  }

`;

const StartButton = styled.span`
  display: ${(props) => props.display};
  position: relative;
  padding: 15px 30px;
  color: #2196f3;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #031321, 0 0 80px #2196f3;
  }
`;
