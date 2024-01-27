// import { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu, Navbar } from './components';
import { Home, Video, Login, Signup } from './pages';

const Main = styled.div`
  flex: 7;
  background-color: #0f0f0f;
`;
const Container = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px;
`;
const Wrapper = styled.div`
  padding: 22px 40px;
`;

function App() {

  return (
    <Container>
      <BrowserRouter>
        <Menu />
        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/" />
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  )
}

export default App;
