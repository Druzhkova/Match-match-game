import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../components';

export function AuthorizationPage() {
  const [name, setName] = useState('');
  const [surname, seSurname] = useState('');
  const [email, setEmail] = useState('');

  const nameHundler = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const surnameHundler = useCallback((e) => {
    seSurname(e.target.value);
  }, []);

  const emailHundler = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <Container>
      <Title>Fill out your profile</Title>
      <Form>
        <Input onInput={nameHundler} value={name} type="text" placeholder="name" />
        <Input onInput={surnameHundler} value={surname} type="text" placeholder="surname" />
        <Input onInput={emailHundler} value={email} type="email" placeholder="email" />
        <Link to="/login"><Button onClick={console.log('ok')}>Save</Button></Link>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  color: #fff;
  background: #2f6d9f;
  box-shadow: 0 0 5px black;
`;

const Title = styled.p`
  margin: 0 0 15px 0;
  font-weight: bold;
  font-size: 18px;
`;

const Input = styled.input`
  padding: 5px 10px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
