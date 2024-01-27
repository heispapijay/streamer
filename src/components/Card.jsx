import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from "../assets/12776d2a-368e-4586-a64e-70daa5243e54.jpg";
import tumbnail from "../assets/A_hand_pointing_to_a_futuristic_technology.png";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "300px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "8px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
  margin: 0px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`;

const ChannelName = styled.h3`
  font-size: 12px;
  color: #aaaaaa;
  margin: 0px;
`;

const Info = styled.h3`
  font-size: 12px;
  color: #aaaaaa;
  margin: 0px;
`;

function Card({type}) {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src={tumbnail}
          />
        <Details type={type}>
          <ChannelImage
            type={type}
            src={profile}
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Jay's Channel</ChannelName>
            <Info>3.1M views • 1 month ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card;