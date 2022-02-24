import React from "react";
import styled from "styled-components";
import { laptop, lapTopL, mobileL, mobileM, mobileS, tablet } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Urbanist", sans-serif;
  ${laptop({ height:"60vh" })}
  ${tablet({ height:"45vh" })}
  ${mobileS({ height:"40vh" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "img info";
  ${mobileL({ display:"flex",  })}

`;
const ImgContainer = styled.div`
  grid-area: img;
  display: flex;
  justify-content: center;
  ${mobileL({ display:"none" })}

`;
const Img = styled.img`
  width: 75%;
  height: 90%;
  ${laptop({ height:"70%" })}
  
`;
const Info = styled.div`
  height: 50%;
  grid-area: info;
  padding: 50px;
  padding-top: 180px;
  padding-right: 120px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.6fr 1fr 0.3fr;
  ${laptop({ padding:"50px" })}
  ${tablet({ padding:"30px" })}
  ${mobileL({ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" })}

`;
const Title = styled.h1`
  font-size: 100px;
  color: black;
  ${lapTopL({ fontSize:"80px" })}
  ${laptop({ fontSize:"60px", paddingTop:"30px" })}
  ${tablet({ fontSize:"40px" })}
  ${mobileL({ fontSize:"50px", paddingTop:"60px" })}
  ${mobileS({ fontSize:"40px" })}
`;
const Desc = styled.span`
  font-size: 22px;
  letter-spacing: 1px;
  padding: 20px;
  padding-left: 10px;
  height: 50%;
  color: black;
  ${lapTopL({ fontSize:"19px", paddingTop:"50px", paddingBottom:"0" })}
  ${laptop({ paddingTop:"25px", paddingBottom:"25px" })}
  ${tablet({ fontSize:"16px", paddingTop:"10px", paddingLeft:"0" })}
  ${mobileL({ fontSize:"22px", marginBottom:"20px" })}
  ${mobileS({ fontSize:"20px" })}
`;

const Button = styled.button`
  margin: 15px 5px;
  width: 30%;
  justify-self: start;
  padding: 15px;
  background-color: white;
  color: black;
  border-radius: 10px;
  letter-spacing: 1px;
  cursor: pointer;
  border: 1px solid black;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${lapTopL({ fontSize:"14px", margin:"0", padding:"0px", height:"40px" })}
  ${tablet({ fontSize:"10px", })}
  ${mobileL({ fontSize:"10px", width:"50%", padding:"10px", alignSelf:"start" })}
`;

const Slider = (props) => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Img src="slidermain.svg" />
        </ImgContainer>
        <Info>
          <Title>Need help for your business?</Title>
          <Desc>
            Probiotics? Blends? Enzymes? We've got it all.
          </Desc>
          <Button onClick={()=>{props.contactRef.current.scrollIntoView({behavior: "smooth", block: "start"})}}>Contact Us</Button>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Slider;
