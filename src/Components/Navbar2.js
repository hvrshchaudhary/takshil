import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 20px;
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
  color: black;
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
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-weight: 500;
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 9px 17px;
  border-radius: 7px;
  color: black;
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
  box-shadow: 2.4px 1px 3.9px rgba(0, 0, 0, 0.017),
    5.5px 2.2px 8.9px rgba(0, 0, 0, 0.024),
    9.5px 3.8px 15.4px rgba(0, 0, 0, 0.03),
    15.2px 6px 24.5px rgba(0, 0, 0, 0.035),
    23.4px 9.3px 37.9px rgba(0, 0, 0, 0.04),
    36.5px 14.5px 59.1px rgba(0, 0, 0, 0.046),
    60.6px 24px 98.1px rgba(0, 0, 0, 0.053),
    121px 48px 196px rgba(0, 0, 0, 0.07);
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
