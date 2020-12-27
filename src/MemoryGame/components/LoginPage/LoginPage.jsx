import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Board, Input } from '../components';
import { loginRequest } from '../../actions';

export function LoginPage() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');

  const history = useHistory();
  const dispatch = useDispatch();

  const authorization = useCallback(() => {
    if (name.length === 0) {
      setNameError(true);
      return;
    }
    dispatch(loginRequest({ name, surname, email }));
    history.push('/user-profile');
  }, [dispatch, name, surname, email, history]);

  return (
    <StyledBoard>
      <Title>Fill out your profile</Title>
      <Form>
        <label htmlFor="name">
          <InputTitle>Username*</InputTitle>
          <StyledInput onChangeText={setName} value={name} id="name" error={nameError} />
        </label>
        <label htmlFor="surname">
          <InputTitle>Surname</InputTitle>
          <Input onChangeText={setSurname} value={surname} id="surname" />
        </label>
        <label htmlFor="email">
          <InputTitle>Email</InputTitle>
          <Input onChangeText={setEmail} value={email} id="email" />
        </label>
        <Note>* - required field</Note>
        <StyledButton onClick={authorization}>Save</StyledButton>
      </Form>
    </StyledBoard>
  );
}

const StyledBoard = styled(Board)`
  color: #fff;
  padding: 50px 40px;
`;

const Title = styled.p`
  margin: 0 0 25px 0;
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

const InputTitle = styled.span`
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
`;

const StyledInput = styled(Input)`
  background: ${(props) => (props.error ? '#ff9393' : '#fff')};
`;

const Note = styled.span`
  font-size: 14px;
  text-align: 'left';
  width: 100%;
  margin: 5px 0;
`;
