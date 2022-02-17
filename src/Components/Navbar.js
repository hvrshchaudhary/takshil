import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 20px;
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
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: "Lobster Two", cursive;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  color: white;
`;
const SubLogo = styled.h3`
  font-size: 24px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  font-family: "Urbanist", sans-serif;
`;
const MenuItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  color: white;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-weight: 500;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  padding: 9px 17px;
  border-radius: 7px;
  color: #51949d;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Takshil</Logo>
          <SubLogo>BioPharma pvt ltd</SubLogo>
        </Left>
        <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem>About Us</MenuItem>
          <MenuItem>Infrastructure</MenuItem>
          <MenuItem>Products</MenuItem>
          <Button>Contact Us</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
