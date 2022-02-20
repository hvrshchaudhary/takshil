import React from "react";
import styled from "styled-components";
import { bigMobiles, mediumTablets, smallerTablets, tablets } from "../Responsive";

const Container = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  box-shadow:
  0px 3.1px 6.7px rgba(0, 0, 0, 0.049),
  0px 8.5px 18.4px rgba(0, 0, 0, 0.07),
  0px 20.5px 44.3px rgba(0, 0, 0, 0.091),
  0px 68px 147px rgba(0, 0, 0, 0.14)
;
${tablets({height:"60vh"})}
${mediumTablets({height:"50vh"})}
${bigMobiles({height:"190vh", marginTop:"50px"})}


`;
const Top = styled.div`
  margin: 40px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Heading = styled.h1`
  text-align: center;
  ${tablets({fontSize:"28px"})}
${mediumTablets({fontSize:"22px"})}
${smallerTablets({fontSize:"18px"})}
${bigMobiles({fontSize:"24px", marginBottom:"0px"})}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: space-evenly;
${bigMobiles({flexDirection:"column"})}

`;
const Item = styled.div`
  height: 310px;
  width: 250px;
  padding: 20px;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
  box-shadow:
  1px 1px 1px rgba(0, 0, 0, 0.035),
  2.9px 2.8px 2.6px rgba(0, 0, 0, 0.05),
  6.9px 6.6px 6.3px rgba(0, 0, 0, 0.065),
  23px 22px 21px rgba(0, 0, 0, 0.1)
;
  ${tablets({height:"260px", width:"200px"})}
${mediumTablets({height:"190px", width:"150px"})}
${smallerTablets({height:"170px", width:"125x"})}
${bigMobiles({height:"300px", width:"240px", margin:"20px"})}

`;
const Img = styled.img`
  height: 200px;
  width: 250px;
  object-fit: contain;
  ${tablets({height:"170px", width:"200px"})}
${mediumTablets({height:"120px", width:"150px"})}
${smallerTablets({height:"100px", width:"125x"})}
${bigMobiles({height:"170px", width:"200px"})}
`;
const Text = styled.h3`
  padding-top: 30px;
  font-size: 24px;
  text-align: center;
  ${tablets({fontSize:"18px"})}
${mediumTablets({fontSize:"14px"})}
${smallerTablets({fontSize:"11px"})}
${bigMobiles({fontSize:"16px"})}
`;

const Conviniences = () => {
  return (
    <Container>
      <Top>
        <Heading>Indivisual needs: Approach anxiety: All taken care.</Heading>
      </Top>
      <Bottom>
        <Item>
          <Img src="assistant.png" />
          <Text>Assistance in choosing the right product.</Text>
        </Item>
        <Item>
          <Img src="conversation.png" />
          <Text>On point communication</Text>
        </Item>
        <Item>
          <Img src="price.png" />
          <Text>Reasonable pricing</Text>
        </Item>
      </Bottom>
    </Container>
  );
};

export default Conviniences;
