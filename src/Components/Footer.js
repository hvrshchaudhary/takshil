import React from "react";
import styled from "styled-components";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

const Container = styled.div`
  display: flex;
  padding: 15px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.5px;
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
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h1`
  font-family: 'Lobster Two', cursive;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3``;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Takshil BioPharma</Logo>
        <Desc>
          Takshil BioPharma pvt ltd delivers Enzyme solutions and Probiotics
          for customer applications in Biopharmaceutical, Fine Chemicals, Food &
          Feed, and Cosmetics industries.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999"><TiSocialFacebook/></SocialIcon>
          <SocialIcon color="e4405f"><TiSocialInstagram/></SocialIcon>
          <SocialIcon color="0e76a8"><TiSocialLinkedin/></SocialIcon>
          <SocialIcon color="55acee"><TiSocialTwitter/></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>Vision</ListItem>
          <ListItem>Mission</ListItem>
          <ListItem>Enzymes</ListItem>
          <ListItem>Probiotics</ListItem>
          <ListItem>Nutraceuticals</ListItem>
          <ListItem>Probiotics Blend</ListItem>
          <ListItem>Dietary Supplements</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>Address</ContactItem>
        <ContactItem>+91 734 567 8901</ContactItem>
        <ContactItem></ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
