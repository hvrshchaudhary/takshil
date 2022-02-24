import React, { useRef } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background:rgba(0,0,0,0.6);
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: absolute;
  font-family: "Nunito Sans", sans-serif;
`;
const Card = styled.div`
  height: 80%;
  opacity: 1;
  width: 40%;
  background-color: white;
  z-index: 2;
  border-radius: 20px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px;
`;
const H1 = styled.h1`
  font-weight: 500;
  font-size: 22px;
`;
const H2 = styled.h1`
  font-weight: 300;
  font-size: 20px;
`;
const Middle = styled.div`
  margin: 40px;
`;
const Desc = styled.span`
  font-weight: 200;
  font-size: 13px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const Property = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const Detail = styled.h4`
  font-weight: 200;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
const Button = styled.button`
  height: 35%;
  width: 80%;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const PopupCard = (props) => {
  

  if(props.obj != null){
      return (
    <Container>
      <Card>
        <Top>
          <H1>{props.selected}</H1>
          <AiOutlineClose
            onClick={props.crossHandler}
            style={{ cursor: "pointer" }}
            />
        </Top>
        <Middle>
          <H2>{props.obj.name}</H2>
          <Desc>{props.obj.desc}</Desc>
        </Middle>
        <Bottom>
          <Left>
            <Property>
              Appearence:
              <Detail>{props.obj.appearance}</Detail>
            </Property>
            <Property>
              LossOnDrying:
              <Detail>{props.obj.lossOnDrying}</Detail>
            </Property>
            <Property>
              Assay
              <Detail> {props.obj.assay}</Detail>
            </Property>
          </Left>
          <Right>
            <Button
              onClick={() => {
                  props.contactRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            >
              Contact Us
            </Button>
          </Right>
        </Bottom>
      </Card>
    </Container>
  );
}

    return(null)

}

export default PopupCard;
