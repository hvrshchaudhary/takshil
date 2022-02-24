import React from "react";
import styled from "styled-components";
import { laptop, lapTopL, mobileL, mobileS, tablet } from "../Responsive";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  background-color: #F0F0F3;
  margin: 100px 0;
  padding: 50px 0;
  ${mobileL({ marginBottom:"20px" })}
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h2`
  color: gray;
  font-size: 24px;
  padding: 20px 0;
  ${lapTopL({ fontSize:"20px"})}
  ${laptop({ fontSize:"19px"})}
`;
const H2 = styled.h1`
  max-width: 60%;
  text-align: center;
  font-size: 60px;
  ${lapTopL({ fontSize:"50px"})}
  ${lapTopL({ maxWidth:"80%"})}
  ${tablet({ maxWidth:"90%", fontSize:"45px" })}
  ${mobileL({ fontSize:"20px" })}
`;
const H3 = styled.h5`
  font-size: 22px;
  font-weight: 300;
  padding: 20px 0;
  ${tablet({  fontSize:"20px" })} 
  ${mobileL({ fontSize:"13px" })}
  ${mobileS({ padding:"20px 10px", textAlign:"center"})}
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 250px;
  ${laptop({ margin:"0 150px"})}
  ${tablet({  margin:"0 60px" })}
  ${mobileL({ margin:"25px" })}
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  ${mobileL({ display:"none" })}
`;
const Middle = styled.div`
  flex: 1;
  ${mobileL({ display:"none" })}
`;
const Card = styled.div`
  margin: 20px;
`;
const Title = styled.h1`
  ${lapTopL({ fontSize:"30px"})}
  ${laptop({ fontSize:"25px"})}
  ${tablet({  fontSize:"20px" })}
`;
const Desc = styled.span`
  ${lapTopL({ fontSize:"14px"})}
  ${laptop({ fontSize:"12px"})}
  ${tablet({  fontSize:"11px" })}
  ${mobileL({ fontSize:"13px" })}
`;
const FAQ = () => {
  return (
    <Container>
      <Heading>
        <H1>WE ARE HERE FOR YOU</H1>
        <H2>HAVING A QUERY? TRY LOOKING FOR IT IN OUR FAQs</H2>
        <H3>Here are some frequently asked questions by our clients:</H3>
      </Heading>
      <Bottom>
        <Left>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Desc>
          </Card>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Desc>
          </Card>
        </Left>
        <Middle>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Desc>
          </Card>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Desc>
          </Card>
        </Middle>
        <Right>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Desc>
          </Card>
          <Card>
            <Title>Question that is repeatedly asked?</Title>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Desc>
          </Card>
        </Right>
      </Bottom>
    </Container>
  );
};

export default FAQ;
