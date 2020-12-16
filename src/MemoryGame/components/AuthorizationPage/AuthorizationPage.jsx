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

  const history = useHistory();
  const dispatch = useDispatch();

  const authorization = useCallback(() => {
    dispatch(authorizationRequest({ name, surname, email }));
    history.push('/user-profile');
  }, [dispatch, name, surname, email, history]);

  return (
    <Container>
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
