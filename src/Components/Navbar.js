import React from "react";
import styled from "styled-components";
import {
  bigMobiles,
  mediumTablets,
  smallMobiles,
  smallTablets,
  tablets,
} from "../Responsive";

const Container = styled.div`
  width: 100vw;
  height: 60px;
  padding-top: 10px;
  padding-bottom: 40px;
  /* background-image: linear-gradient(
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
  ); */
  ${tablets({ height: "50px", paddingTop: "6px" })}
  ${mediumTablets({ height: "40px", paddingTop: "4px" })}
  ${smallTablets({ height: "30px", paddingTop: "2px" })}
  ${bigMobiles({ backgroundColor:"white", backgroundImage:"none" })}
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
  ${bigMobiles({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  })}

`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  /* color: white; */
  color: black;
  ${tablets({ fontSize: "40px" })}
  ${mediumTablets({ fontSize: "30px" })}
  ${smallTablets({ fontSize: "28px" })}
  ${bigMobiles({ color:"black"})}
`;
const SubLogo = styled.h3`
  font-size: 24px;
  ${tablets({ fontSize: "20px" })}
  ${mediumTablets({ fontSize: "16px" })}
  ${smallTablets({ fontSize: "16px" })}
  ${smallMobiles({ display:"none"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  font-family: "Urbanist", sans-serif;
  ${bigMobiles({
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center"
  })}

`;
const MenuItem = styled.div`
  font-size: 24px;
  cursor: pointer;
  /* color: white; */
  color: black;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-weight: 500;
  ${tablets({ fontSize: "20px" })}
  ${mediumTablets({ fontSize: "16px" })}
  ${smallTablets({ fontSize: "14px", marginLeft: "7px" })}
  ${bigMobiles({display:"none"})}
`;
const Button = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 9px 17px;
  border-radius: 7px;
  /* color: #51949d; */
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
  ${tablets({ padding: "7px 16px", fontSize: "16px" })}
  ${mediumTablets({ padding: "5px 15px", fontSize: "14px" })}
  ${smallTablets({ padding: "4px 12px", fontSize: "11px" })}
  ${bigMobiles({padding:"7px 16px", color:"black", border:"1px solid black", marginLeft:"0"})}
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
          <MenuItem>Products</MenuItem>
          <Button>Contact Us</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
