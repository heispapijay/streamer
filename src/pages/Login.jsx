import React, {useState} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useApiService } from "../services/api";
import { red } from "@mui/material/colors";

const Login = () => {

  const {post} = useApiService()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function onPasswordChange(e){
    setPassword(e.target.value);
  }

  const login = () =>{
    if (email === "" || password === ""){
      setErrorMessage("Please fill in all fields");
      return;
    }
    setErrorMessage("");
    
    setIsLoading(true);
    post('/auth/login', {email, password})
    .then((response) => {
      if(response.data){
        localStorage.setItem('token', response.data.token);
        
        // TODO: CHANGE TO NAVIGATE
        window.location.href = "/";
      }
      else{
        setErrorMessage("error");
      }
    })
    .catch((error) => {
      console.log(error);
      setErrorMessage(error.response.data.message || "error");
    }).finally(()=>{
      setIsLoading(false);
    });
  }
  

  return (
    <Container>
      <Wrapper>
        <Title>Welcome back to streamer</Title>
        <Input onChange={(e)=>setEmail(e.target.value)} placeholder="email" type="email" />
        <Input onChange={onPasswordChange} type="password" placeholder="password" />
        <Button onClick={()=>login()} disabled={isLoading}>Login</Button>
      
        <div>
          {errorMessage}{
            isLoading ? "Loading....." : ""
          }
        </div>
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
