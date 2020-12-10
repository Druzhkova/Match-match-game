import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';

export function LoginPage() {
  return (
    <>
      <Link to="/main"><Button>Start Game</Button></Link>
    </>
  );
}
