import React from 'react';
import styled from "styled-components";
import Comment from "./Comment";

function Commentsection() {
  return (
    <Container>
      <NewComment>
        <Avatar />
        <Input placeholder='Add a comment...' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      Commentsection
      </Container>
  )
}

//STYLES FOR COMPONTENTS
const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #373737;
  color: #ffffff;
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

export default Commentsection;