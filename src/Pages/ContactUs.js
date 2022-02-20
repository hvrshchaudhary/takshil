import React from "react";
import styled from "styled-components";
import { mediumLargeTablets } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
const Left = styled.div`
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Top = styled.div`
  flex: 1;
  height: 50vh;
  padding-left: 8vw;
  width: 42vw;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  flex-wrap: wrap;
  margin: 40px;
`;
const Input = styled.input`
  border: 1px solid black;
  width: 95%;
  height: 7%;
  margin: 20px 10px 0 0;
  padding: 8px;
`;
const Input1 = styled.input`
  border: 1px solid black;
  width: 95%;
  height: 27%;
  margin: 20px 10px 0 0;
  padding: 8px;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 9px 17px;
  display: flex;
  justify-content: center;
  width: 20%;
  border-radius: 90px;
  color: black;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  margin-top: 25px;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Bottom = styled.div`
  flex: 1;
  background-color: #dea5c5;
  display: flex;
  align-items: start;
  height: 50vh;
  width: 50vw;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
`;

const Heading = styled.h1`
  color: white;
  font-size: 75px;
  font-weight: 900;
  padding-left: 10vw;
  margin-top: 17px;
${mediumLargeTablets({fontSize:"68px"})}
`;
const SubText = styled.div`
  color: white;
  padding-left: 10vw;
  margin-top: 17px;
  font-weight: 600;
  max-width: 390px;
  font-size: 28px;
${mediumLargeTablets({fontSize:"24px"})}
`;
const Desc = styled.div`
  padding-left: 10vw;
  max-width: 410px;
  font-weight: 250;
  margin-top: 17px;
  color: white;
${mediumLargeTablets({ display:"none" })}
`;
const Logo = styled.div`
  font-family: "Lobster Two", cursive;
  display: flex;
  flex-direction: row;
  font-size: 36px;
  padding-left: 10vw;
  padding-top: 20px;
  color: white;
  width: 200px;
  height: 100px;
  flex-wrap: wrap;
`;
const Right = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
  align-items: center;
`;
const Top1 = styled.div`
  flex: 1;
  flex-wrap: wrap;
  height: 50vh;
  width: 50vw;
`;
const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
const Bottom1 = styled.div`
  flex: 1;
  background-color: #dea5c5;
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Email = styled.div`
  background-color: white;
  width: 40%;
  height: 15%;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;
const Icon = styled.div``;
const Myid = styled.div``;
const Text = styled.h3`
  color: #dea5c5;
`;
const LinkToEmail = styled.div`
  color: gray;
`;
const Phone = styled.div`
  background-color: white;
  cursor: pointer;
  width: 40%;
  height: 15%;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;

const ContactUs = () => {
  return (
    <>
      <Container>
        <Left>
          <Top>
            <Form>
              <Input placeholder="Full Name" />
              <Input placeholder="Email" />
              <Input1 placeholder="Message" />
              <Button>Send!</Button>
            </Form>
          </Top>
          <Bottom>
            <Heading>Get in Touch</Heading>
            <SubText>
              Hey! We are looking forward to start a project with you!
            </SubText>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quod earum doloremque tempore. Natus iste inventore
              impedit iure alias odit delectus nihil ad ex.
            </Desc>
            <Logo>Takshil</Logo>
          </Bottom>
        </Left>
        <Right>
          <Top1>
            <Img src="contact2.png" />
          </Top1>
          <Bottom1>
            <Email>
              <Icon>
                <Img src="mail.png" />
              </Icon>
              <Myid>
                <Text>Mail us at</Text>
                <LinkToEmail>youremail@takshil.com</LinkToEmail>
              </Myid>
            </Email>
            <Phone>
              <Icon>
                <Img src="phone1.png" />
              </Icon>
              <Myid>
              <Text>Call us</Text>
              <LinkToEmail>(0120)-2307854</LinkToEmail>
              </Myid>
            </Phone>
          </Bottom1>
        </Right>
      </Container>
    </>
  );
};

export default ContactUs;
