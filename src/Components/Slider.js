import React from "react";
import styled from "styled-components";
import { bigMobiles, massiveMobiles, mediumTablets, smallerScreen, tablets, tinyMobiles } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Urbanist", sans-serif;
  /* background-image: linear-gradient(
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
  ); */
  ${tablets({ height:"80vh" })}
  ${mediumTablets({ height:"60vh" })}
  ${massiveMobiles({ height:"40vh" })}
  ${bigMobiles({ backgroundColor:"white", backgroundImage:"none", height:"50vh" })}
${tinyMobiles({height:"40vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: 
  "img img info"
  ;
${bigMobiles({display:"flex"})}

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
${bigMobiles({ display:"none" })}
`;
const Info = styled.div`
  height: 50%;
  grid-area: info;
  align-self: center;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 1fr 0.3fr;
  ${bigMobiles({paddingTop:"0"})}

`;
const Title = styled.h1`
  font-size: 100px;
  font-family: "Lobster Two", cursive;
  /* color: white; */
  color: black;
  ${tablets({ fontSize:"80px" })}
  ${mediumTablets({ fontSize:"60px" })}
  ${massiveMobiles({ fontSize:"40px" })}
${bigMobiles({color:"black", fontSize:"70px" })}
${tinyMobiles({fontSize:"60px" })}
`;
const Desc = styled.span`
  font-size: 28px;
  padding: 20px;
  height: 50%;
  color: black;
  /* color: white; */
  ${tablets({ fontSize:"20px" })}
  ${mediumTablets({ fontSize:"14px", padding:"10px" })}
  ${massiveMobiles({ fontSize:"10px", padding:"7px" })}
${bigMobiles({color:"black", fontSize:"18px", margin:"10px"  })}
${tinyMobiles({fontSize:"15px" })}
`;

const Button = styled.button`
  margin: 15px 5px;
  width: 30%;
  justify-self: start;
  padding: 15px;
  background-color: white;
  color: black;
  /* color: #52939c; */
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
  ${smallerScreen({ width:"40%" })}
  ${tablets({ width:"40%", fontSize:"15px", padding:"10px" })}
  ${mediumTablets({ width:"45%", fontSize:"12px", padding:"7px" })}
  ${massiveMobiles({ width:"45%", fontSize:"8px", padding:"0px", margin:"0"})}
${bigMobiles({color:"black", border:"1px solid black", padding:"10px", margin:"10px" })}
${tinyMobiles({padding:"8px" })}
`;

const Slider = () => {
  return (
    <Container>
      <Wrapper>
          <Img src="main.png" />
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
