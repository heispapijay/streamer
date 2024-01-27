import React from 'react';
import styled from 'styled-components';
import { Card } from '../components';

function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />    
    </Container>
  )
}

//STYLES FOR COMPONTENTS
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Home