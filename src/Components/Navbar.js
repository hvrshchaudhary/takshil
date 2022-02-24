import React from "react";
import styled from "styled-components";
import { laptop, mobileL, mobileM, mobileS, tablet } from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 40px;
  ${mobileS({ padding:"20px"  })}
`;

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileL({ margin:"0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  ${mobileL({ justifyContent:"flex-start", paddingLeft:"12px" })}
  
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  font-family: "Lobster Two", cursive;
  color: black;
  ${laptop({ fontSize:"35px" })}
  ${tablet({ fontSize:"28px" })}
  ${mobileL({ fontSize:"22px" })}
`;
const SubLogo = styled.h3`
  font-size: 20px;
  letter-spacing: 1px;
  color: black;
  font-family: "Quicksand", sans-serif;
  ${laptop({ fontSize:"17px" })}
  ${tablet({ fontSize:"14px"})}
  ${mobileM({ fontSize:"10px" })}
  ${mobileS({ display:"none" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  ${laptop({ fontSize:"20px" })}
  ${tablet({ fontSize:"16px", margin:"3px" })}
  ${mobileL({ display:"none" })}

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
  &:hover {
    transform: scale(1.1);
  }
  ${tablet({ fontSize:"12px" })}
`;

const Navbar = (props) => {
  const goToContactUs = ()=>{
    props.contactRef.current.scrollIntoView({behavior: "smooth", block: "start"})
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Takshil</Logo>
          <SubLogo>BioPharma pvt ltd</SubLogo>
        </Left>
        <Right>
          <MenuItem>Home</MenuItem>
          <MenuItem onClick={()=>{props.aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"})}}>About Us</MenuItem>
          <MenuItem onClick={()=>{props.productRef.current.scrollIntoView({behavior: "smooth", block: "start"})}}>Products</MenuItem>
          <Button onClick={()=>{props.contactRef.current.scrollIntoView({behavior: "smooth", block: "start"})}}>Contact Us</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
