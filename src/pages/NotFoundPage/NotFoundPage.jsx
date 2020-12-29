import React from 'react';
import styled from 'styled-components';
import notFound from '../../assets/not-found.gif';
import notFound1 from '../../assets/not-found1.png';

export function NotFoundPage() {
  return (
    <Container>
      <img src={notFound1} alt="" />
      <Img src={notFound} alt="" />
    </Container>

  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #E1E3E2;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
  bottom: 0px;
  z-index: 2;
`;
