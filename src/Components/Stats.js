import React from "react";
import styled from "styled-components";
import { laptop, lapTopL, mobileL, mobileM, tablet,mobileS } from "../Responsive";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 60px;
  background-color: #F8F4F6;
  height: 75vh;
  ${lapTopL({ height:"70vh"})}
  ${tablet({ height:"60vh" })}
  ${mobileL({ height:"50vh"})}
  ${mobileL({ height:"58vh"})}
  ${mobileS({ height:"45vh" })}

`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  padding: 35px 100px;
  font-size: 30px;
  margin: 0 220px;
  text-align: center;
  ${lapTopL({ fontSize:"22px"})}
  ${laptop({ fontSize:"18px", margin:"0 125px"})}
  ${tablet({ fontSize:"16px", margin:"0 50px", padding:"35px 60px" })}
  ${mobileL({ fontSize:"14px", margin:"0 20px" ,padding: "25px 10px", paddingBottom:"15px"})}
  ${mobileM({ fontSize:"12px", margin:"0 20px" ,padding: "35px 10px", paddingBottom:"15px"})}
  ${mobileS({ fontSize:"14px", margin:"0 20px" ,padding: "15px 10px", fontWeight:"300"})}
`;
const H3 = styled.h3`
  font-size: 25px;
  text-align: center;
  color: #cccccc;
  ${laptop({ fontSize:"20px"})}
  ${tablet({ fontSize:"18px"})}
  ${mobileL({ fontSize:"16px"})}
  ${mobileS({ fontWeight:"800"})}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 40px;
  justify-content: center;
  ${mobileL({ margin:"25px"})}
  ${mobileM({ margin:"20px"})}
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 200px;
  cursor: pointer;
  background-color: white;
  margin: 0 10px;
  border-radius: 10px;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${laptop({ height:"220px", width:"180px"})}
  ${tablet({ height:"200px", width:"160px" })}
  ${mobileL({ height:"160px"})}
  ${mobileS({ height:"120px" })}
`;
const Img = styled.img`
  height: 60%;
  width: 60%;
  align-self: center;
  justify-self: center;
  object-fit: contain;
`;
const Text = styled.h3`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  ${laptop({ fontSize:"14px", fontWeight:"900"})}
  ${mobileL({ fontSize:"12px", padding:"10px"})}
  ${mobileS({ fontSize:"10px" })}
`;
const Desc = styled.span`
  text-align: center;
  ${laptop({ fontSize:"14px" })}
  ${tablet({ fontSize:"12px", paddingBottom:"10px"})}
  ${mobileS({ fontSize:"10px" })}
`;
const Hell = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: white;
  height: 40px;
  border: none;
  cursor: pointer;
  width: 18%;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${tablet({ width:"25%" })}
  ${mobileS({ width:"45%", fontSize:"12px" })}
`;
const Stats = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <H1>
            Takshil Biopharma delivers Enzyme solutions and Probiotics
            for customer applications in Biopharmaceutical, Fine Chemicals, Food
            & Feed, and Cosmetics industries.
          </H1>
          <H3>Customised solutions</H3>
        </Top>
        <Bottom>
          <Card>
            <Img src="customers.svg" />
            <Text>100+</Text>
            <Desc>Happy Customers</Desc>
          </Card>
          <Card>
            <Img src="product.svg" />
            <Text>70+</Text>
            <Desc>Products</Desc>
          </Card>
          <Card>
            <Img src="orders.svg" />
            <Text>On Time Delivery</Text>
            <Desc>; )</Desc>
          </Card>
        </Bottom>
        <Hell>
          <Button>Contact Us</Button>
        </Hell>
      </Wrapper>
    </Container>
  );
};

export default Stats;
