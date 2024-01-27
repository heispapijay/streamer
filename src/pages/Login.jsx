import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Welcome back to streamer</Title>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Login</Button>
        <Link to="/signup">
          <AccountText>Don't have an account? Sign up</AccountText>
        </Link>
      </Wrapper>
    </Container>
  );
};

//STYLES FOR COMPONTENTS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: #202020;
  border: 1px solid #373737;
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #ffffff;
`;

const AccountText = styled.p`
  font-size: 14px;
  font-weight: 300;
  text-decoration: underline;
  color: #ffffff;
`;

const Input = styled.input`
  border: 1px solid #373737;
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: #ffffff;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: #373737;
  color: #aaaaaa;
`;


export default Login;
