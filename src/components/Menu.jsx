import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home, Whatshot, Subscriptions, MusicNote, SportsEsports, SportsFootball } from '@mui/icons-material';


function Menu() {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>Streamer</Logo>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <Home />
            Home
          </Item></Link>
        <Item>
          <Whatshot />
          Trending
        </Item>
        <Item>
          <Subscriptions />
          Subscriptions
        </Item>

        <Hr />
        <Title>Best of Streamer</Title>
        <Item>
          <MusicNote />
          Music
        </Item>
        <Item>
          <SportsFootball />
          Sports
        </Item>

        <Item>
          <SportsEsports />
          Gaming
        </Item>
      </Wrapper>
      <Hr />
      <Wrapper>
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to='login' style={{ textDecoration: "none", color: "inherit" }}>
            <Button>
              Sign in
            </Button>
          </Link>
        </Login>
      </Wrapper>
    </Container>
  )
}

// STYLES FOR COMPONENTS
const Container = styled.div`
  flex: 1;
  background-color: #0f0f0f;
  height: 100vh;
  color: white;
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 12px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 10px;

  &:hover {
    background-color: #3d3d3d;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.2px solid #3f3f3f;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

export default Menu