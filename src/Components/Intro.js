import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Urbanist", sans-serif;
`;
const Wrapper = styled.div`
  margin: 200px 300px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "left right right img"
    "vision mission values .";
`;
const Left = styled.div`
  grid-area: left;
  margin: 15px 0;
`;
const Logo = styled.h3`
  font-family: "Lobster Two", cursive;
  letter-spacing: 1px;
`;
const SubHeading = styled.h1`
  color: #dea5c5;
`;
const Right = styled.div`
  font-size: 18px;
  margin: 15px 0;
  grid-area: right;
  letter-spacing: 0.5px;
`;
const Desc1 = styled.p`
  font-weight: 500;
`;
const Desc2 = styled.p`
  color: gray;
`;
const Heading = styled.h3``;
const Desc = styled.p``;
const Vision = styled.div`
  font-weight: 700;
  background-color: #dea5c5;
  padding: 70px 40px;
  box-shadow: 0px 0.9px 3.1px rgba(0, 0, 0, 0.027),
    0px 2.5px 8.6px rgba(0, 0, 0, 0.045), 0px 6px 20.8px rgba(0, 0, 0, 0.064),
    0px 20px 69px rgba(0, 0, 0, 0.09);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.035);
  }
  margin: 15px 0;
  grid-area: vision;
  color: white;
`;
const Mission = styled.div`
  font-weight: 800;
  margin: 15px 0;
  background-color: #fad9ec;
  grid-area: mission;
  padding: 70px 40px;
  box-shadow: 0px 0.9px 3.1px rgba(0, 0, 0, 0.027),
    0px 2.5px 8.6px rgba(0, 0, 0, 0.045), 0px 6px 20.8px rgba(0, 0, 0, 0.064),
    0px 20px 69px rgba(0, 0, 0, 0.09);
  color: white;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.035);
  }
`;
const Values = styled.div`
  font-weight: 300;
  background-color: white;
  box-shadow: 0px 0.9px 3.1px rgba(0, 0, 0, 0.027),
    0px 2.5px 8.6px rgba(0, 0, 0, 0.045), 0px 6px 20.8px rgba(0, 0, 0, 0.064),
    0px 20px 69px rgba(0, 0, 0, 0.09);
  grid-area: values;
  padding: 70px 40px;
  margin: 15px 0;
  color: black;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.035);
  }
`;
const Img = styled.img`
  max-width: 250px;
  min-height: 200px;
  align-self: flex-end;
  animation: MoveUpDown 2.8s ease-in-out infinite alternate-reverse both;
  position: relative;
  left: 0;
  bottom: 0;
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-35px);
    }
  }
`;

const Intro = () => {
  return (
    <Container>
      <Wrapper>
        <Img src="art.png" />
        <Left>
          <Logo>Takshil BioPharma pvt ltd</Logo>
          <SubHeading>LEADING WORK THAT SAVES EVERYONE'S LIFE</SubHeading>
        </Left>
        <Right>
          <Desc1>
            Takshil BioPharma pvt ltd delivers Enzyme solutions and Probiotics
            for customer applications in Biopharmaceutical, Fine Chemicals, Food
            & Feed, and Cosmetics industries.
          </Desc1>
          <Desc2>
            With a portfolio of over 20 Enzymes, 30 Probiotics and Probiotic
            Blends Takshil BioPharma pvt ltd has a proven record of providing
            customized solutions.
          </Desc2>
        </Right>
        <Vision>
          <Heading>Vision</Heading>
          <Desc>
            Our Vision is to become a Global Leader in all our principal market.
          </Desc>
        </Vision>
        <Mission>
          <Heading>Mission</Heading>
          <Desc>
            Manufacture quality Enzymes, Probiotics and Probiotic blends at
            affordable prices with global companies.
          </Desc>
        </Mission>
        <Values>
          <Heading>Values</Heading>
          <Desc>
            Performance driven work culture. Collaboration, Effective Team work
            and Mutual respect.
          </Desc>
        </Values>
      </Wrapper>
    </Container>
  );
};

export default Intro;
