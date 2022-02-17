import React from "react";
import styled from "styled-components";
import Navbar2 from "../Components/Navbar2";

const Container = styled.div`
  height: 100vh;
`;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Img = styled.img``;
const Right = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBg = styled.div`
  border-radius: 15px;
  height: 65%;
  width: 60%;
  background-color: white;
  box-shadow: 0px 0px 1px;
`;
const ContactUs = () => {
  return (
    <>
      <Navbar2 />
      <Container>
        <Wrapper>
          <Left>
            <Img src= "contact.png"/>
          </Left>
          <Right>
          <FormBg>

          </FormBg>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactUs;
