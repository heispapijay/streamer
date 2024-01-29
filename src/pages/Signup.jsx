import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useApiService } from "../services/api";


const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { post } = useApiService();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = () => {
  
    if (email === "" || password === "") {
      setErrorMessage("Please fill in all fields");
      return;
    }
    // TODO: validate email and password
    setIsLoading(true);

    setErrorMessage("");
    const signupData = {
      name: fullName,
      email: email,
      password: password,
    };
    post("/auth/signup", signupData).then((response) => {
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        
        // localStorage.setItem('token', response.data.token);

        // TODO: CHANGE TO NAVIGATE
        window.location.href = "/";
      }
      else {
        setErrorMessage("error");
      }
    }).catch((error) => {
      console.log(error);
      setErrorMessage(error.response.data.message || "error");
    }).finally(() => {
      setIsLoading(false);

    })
  };

  return (
    <Container>
      <Wrapper>
        <Title>Welcome to streamer</Title>
        <Input placeholder="full name" value={fullName} onChange={handleFullNameChange} />
        <Input placeholder="email" value={email} onChange={handleEmailChange} />
        <Input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
        <div>
          {errorMessage}{
            isLoading ? "Loading....." : ""
          }
        </div>
        <Button disabled={isLoading} onClick={handleSignUp}>Sign Up</Button>
        <Link to="/login">
          <AccountText>Have an account? Login</AccountText>
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

export default Signup;
