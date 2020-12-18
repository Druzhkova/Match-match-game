import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Board, Input } from '../components';
import { loginRequest } from './actions';

export function LoginPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const authorization = useCallback(() => {
    dispatch(loginRequest({ name, surname, email }));
    history.push('/user-profile');
  }, [dispatch, name, surname, email, history]);

  return (
    <Container>
      <Board>
        <Title>Fill out your profile</Title>
        <Form>
          <Input onChangeText={setName} value={name} placeholder="name" />
          <Input onChangeText={setSurname} value={surname} placeholder="surname" />
          <Input onChangeText={setEmail} value={email} placeholder="email" />
          <StyledButton onClick={authorization}>Save</StyledButton>
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

const StyledButton = styled(Button)`
  width: 100%;
`;
