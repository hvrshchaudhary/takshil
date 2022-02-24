import React, { useState } from "react";
import styled from "styled-components";
import { laptop, mobileL, mobileM, mobileS, tablet } from "../Responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;
const Top = styled.div`
  flex: 1;
  height: 50vh;
  padding-left: 8vw;
  width: 100vw;
  display: flex;
  flex-direction: row;
  ${tablet({ paddingLeft: "0" })}
`;
const Left = styled.div`
  height: 50vh;
  width: 50%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${mobileL({ width:"100%"})}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
${tablet({ paddingLeft:"5vw" })}
`;
const Input = styled.input`
  border: 1px solid black;
  width: 75%;
  height: 7%;
  margin: 20px 10px 0 0;
  padding: 8px;
  ${tablet({ width: "60%" })}
  ${mobileL({ width:"75%"})}
`;
const Input1 = styled.input`
  border: 1px solid black;
  width: 75%;
  height: 80px;
  margin: 20px 10px 0 0;
  padding: 8px;
  ${tablet({ width: "60%" })}
  ${mobileL({ width:"75%"})}
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
  ${tablet({ width: "45%" })}
`;
const Right = styled.div`
  flex-grow: 1;
  display: flex;
  font-family: "Nunito Sans", sans-serif;
  align-items: center;
  justify-content: center;
`;
const Top1 = styled.div`
  flex: 1;
  flex-wrap: wrap;
  height: 50vh;
  width: 50vw;
  ${mobileL({ display: "none" })}
`;
const ImgT = styled.img`
  object-fit: contain;
  height: 80%;
  width: 60%;
  padding: 20px;
${tablet({ width:"70%" })}
`;
const Bottom = styled.div`
  flex: 1;
  background-color: #999999;
  display: flex;
  align-items: start;
  height: 50vh;
  width: 100vw;
  flex-direction: row;
  font-family: "Nunito Sans", sans-serif;
`;

const Heading = styled.h1`
  color: white;
  font-size: 75px;
  font-weight: 900;
  padding-left: 10vw;
  margin-top: 17px;
  ${tablet({ fontSize: "51px", paddingLeft:"5vw" })}
  ${mobileL({ fontSize:"30px"})}
`;
const SubText = styled.div`
  color: white;
  padding-left: 10vw;
  margin-top: 17px;
  font-weight: 600;
  max-width: 390px;
  font-size: 28px;
  ${tablet({ fontSize: "24px", paddingLeft:"5vw" })}
  ${mobileL({ fontSize:"16px"})}
`;
const Desc = styled.div`
  padding-left: 10vw;
  max-width: 410px;
  font-weight: 250;
  margin-top: 17px;
  color: white;
  ${laptop({ display: "none" })}
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
${tablet({ paddingLeft:"5vw" })}
${mobileL({ fontSize:"26px"})}
`;


const Bottom1 = styled.div`
  flex: 1;
  background-color: #999999;
  height: 50vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobileL({ justifyContent:"flex-start", marginTop:"35px" })}
  ${mobileM({ marginTop:"0" })}

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
  &:hover {
    transform: scale(1.1);
  }
  ${tablet({ height: "8%" })}
  ${mobileL({ height:"3%", alignItems:"center" })}
  ${mobileM({ marginTop:"35px" })}
`;

const Icon = styled.div`
  ${mobileL({ flex:"1" })}
  ${mobileL({ display:"none" })}
`;
const Img = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
const Myid = styled.div``;
const Text = styled.h3`
  color: black;
  padding-left: 10px;
  ${laptop({ fontSize: "15px" })}
  ${tablet({ fontSize: "18px", fontWeight: "300" })}
  ${mobileL({ fontSize:"15px" })}
`;
const LinkToEmail = styled.div`
  padding-left: 10px;
  color: gray;
  ${laptop({ fontSize: "12px" })}
  ${tablet({ display: "none" })}
`;
const Phone = styled.div`
  background-color: white;
  padding-left: 10px;
  cursor: pointer;
  width: 40%;
  height: 15%;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${tablet({ height: "8%" })}
  ${mobileL({ height:"3%", alignItems:"center" })}
`;
const ContactUs = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  // function sendEmail() {
  //   <script src="https://smtpjs.com/v3/smtp.js"></script>
  //   Email.send({
  //     Host: "smtp.gmail.com",
  //     Username : "yashchaudhary0717@gmail.com",
  //     Password : "8750904397",
  //     To : 'yashchaudhary143@gmail.com',
  //     From : "yashchaudhary0717@gmail.com",
  //     Subject : "enquiry",
  //     Body : {fullName,email,message},
  //     }).then(
  //       message => alert("mail sent successfully")
  //     );
  // }
  return (
    <>
      <Container>
        <Top>
          <Left>
            <Form>
              <Input
                placeholder="Full Name"
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
              <Input
                placeholder="Email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <Input1
                placeholder="Message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
              <Button>Send!</Button>
            </Form>
          </Left>
          <Right>
            <Top1>
              <ImgT src="contacth.svg" />
            </Top1>
          </Right>
        </Top>
        <Bottom>
          <Left>

          <Heading>Get in Touch</Heading>
          <SubText>
            Hey! We are looking forward to start a project with you!
          </SubText>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            quod earum doloremque tempore. Natus iste inventore impedit iure
            alias odit delectus nihil ad ex.
          </Desc>
          <Logo>Takshil</Logo>
          </Left>
          <Right>
          <Bottom1>
            <Email onClick={()=>{window.location.href = "mailto:yashchaudhary143@gmail.com"}}>
              <Icon>
                <Img src="mailboxBlack.svg" />
              </Icon>
              <Myid>
                <Text>Mail us</Text>
                <LinkToEmail>youremail@takshil.com</LinkToEmail>
              </Myid>
            </Email>
            <Phone onClick={()=>{window.location.href = "tel:8178993169"}}>
              <Icon>
                <Img src="contact1.svg" />
              </Icon>
              <Myid>
                <Text>Call us</Text>
                <LinkToEmail>(0120)-2307854</LinkToEmail>
              </Myid>
            </Phone>
          </Bottom1>
        </Right>
        </Bottom>
        
      </Container>
    </>
  );
};

export default ContactUs;
