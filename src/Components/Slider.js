import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Urbanist", sans-serif;
  background-image: linear-gradient(
    to right,
    #518289,
    #51858c,
    #52878f,
    #528a93,
    #528d96,
    #528f98,
    #529099,
    #52929b,
    #52939c,
    #52939c,
    #51949d,
    #51949d
  );
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "img img info"
  ;
`;
const Img = styled.img`
  width: 100%;
  grid-area: img;
  align-self: center;
  animation: MoveUpDown 2.8s ease-in-out infinite alternate-reverse both;
  position: relative;
  left: 0;
  bottom: 0;
  @keyframes MoveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-35px);
  }
}
`;
const Info = styled.div`
  height: 50%;
  grid-area: info;
  align-self: center;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 1fr 0.3fr;
`;
const Title = styled.h1`
  font-size: 100px;
  font-family: "Lobster Two", cursive;
  color: white;
  height: 50%;
`;
const Desc = styled.span`
  font-size: 28px;
  padding: 20px;
  height: 50%;
  color: white;
`;

const Button = styled.button`
  margin: 15px 5px;
  width: 30%;
  justify-self: start;
  padding: 15px;
  background-color: white;
  color: #52939c;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  border: 1px solid white;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
          <Img src="slidermain.jpg" />
          <Info>
          <Title>Takshil Biopharma</Title>
          <Desc>The point where Biotechnology and Pharmaceutical Manufacturing meet.</Desc>
          <Button>Contact Us</Button>
          </Info>
      </Wrapper>
    </Container>
  );
};

export default Slider;
