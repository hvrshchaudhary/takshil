import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { probiotics, enzymes, probioticBlends, nutraceuticals } from "../Data";
import { laptop, lapTopL, mobileL, mobileM, tablet } from "../Responsive";
import PopupCard from "./PopupCard";
import { nutraceuticalPopUp ,probioticsPopUp,enzymesPopUp, } from "../Data2";

const Container = styled.div`
  font-family: "Quicksand", sans-serif;
  height: 80vh;
  ${lapTopL({ height: "90vh" })}
  ${mobileL({ height: "65vh" })}
  ${mobileM({ height: "60vh" })}
`;
const Wrapper = styled.div``;
const Top = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 50px;
  height: 100px;
  ${mobileL({ margin: "20px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const H1 = styled.h1`
  ${tablet({ fontSize: "24px", paddingLeft: "12px" })}
  ${mobileL({ fontSize: "18px" })}
`;
const Right = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileL({ flex: "1" })}
`;
const FilterCity = styled.select`
  width: 50%;
  height: 38px;
  padding: 10px;
  cursor: pointer;
  ${mobileL({ width: "80%" })}
`;
const CityOption = styled.option``;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 40px;
  margin-left: 10rem;
  margin-right: 10rem;
  flex-wrap: wrap;
  ${laptop({ margin: "40px 100px", justifyContent: "center" })}
  ${tablet({ margin: "40px 50px" })}
  ${mobileL({ margin: "20px 20px" })}
  ${mobileM({ margin: "0" })}
`;
// const Bottom3 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-top: 40px;
// `;
// const Bottom1 = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-top: 40px;
// `;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 250px;
  cursor: pointer;
  margin: 10px 10px;
  border-radius: 10px;
  box-shadow: 0.3px 0.5px 2.4px rgba(0, 0, 0, 0.025),
    2px 4px 19px rgba(0, 0, 0, 0.05);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
  ${lapTopL({ height: "150px", width: "200px" })}
  ${mobileL({ height: "80px", width: "150px" })}
  ${mobileM({ height: "60px", width: "120px" })}
`;
const Text = styled.h3`
  /* text-align: center; */
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  ${lapTopL({ fontSize: "15px", padding: "15px 0", paddingLeft: "20px" })}
  ${mobileL({ fontSize: "12px" })}
  ${mobileM({ fontSize: "10px", paddingLeft: "12px" })}
`;
const Address = styled.h4`
  color: lightgray;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 700;
  ${lapTopL({ fontSize: "12px" })}
  ${mobileL({ display: "none" })}
`;
// const Bottom2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   height: 150px;
// `;
const Button = styled.button`
  width: 60%;
  align-self: center;
  height: 14%;
  margin-top: 20px;
  background-color: white;
  cursor: pointer;
  border: none;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const ShopByCategory = (props) => {
  const [selected, setSelected] = useState("Probiotics");
  useEffect(() => {
    if (selected === "Probiotics") {
      setCategory(probiotics);
    } else if (selected === "Enzymes") {
      setCategory(enzymes);
    } else if (selected === "Probiotic Blend") {
      setCategory(probioticBlends);
    } else if (selected === "Nutraceuticals") {
      setCategory(nutraceuticals);
    }
  });
  const [category, setCategory] = useState(probiotics);
  const [name, setName] = useState("");
  const [obj, setObj] = useState(null);
  useEffect(() => {
    if (selected === "Probiotics") {
      let object = probioticsPopUp.find((o) => o.name === name);
      setObj(object)
    } else if (selected === "Enzymes") {
      let object = enzymesPopUp.find((o) => o.name === name);
      setObj(object)
    } else if (selected === "Nutraceuticals") {
      let object = nutraceuticalPopUp.find((o) => o.name === name);
      setObj(object)
    }
    else if(name === ""){
      setObj(null)
    }
  }, [name]);
  const crossHandler = ()=>{
    setName("")
    document.body.style.background = ""

  }
  return (
    <>
      <PopupCard obj={obj} crossHandler={crossHandler} selected = {selected} contactRef = {props.contactRef} />
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <H1>Shop By Category</H1>
            </Left>
            <Right>
              <FilterCity
                onChange={(event) => {
                  setSelected(event.target.value);
                }}
              >
                <CityOption>Probiotics</CityOption>
                <CityOption>Enzymes</CityOption>
                <CityOption>Probiotic Blend</CityOption>
                <CityOption>Nutraceuticals</CityOption>
              </FilterCity>
            </Right>
          </Top>
          <Bottom>
            {category.map((event) => {
              return (
                <Card
                  onClick={() => {
                    setName(event.name);
                    
                  }}
                  key={event.name}
                >
                  <Text>{event.name}</Text>
                  <Address>{event.description}</Address>
                  {/* <Button>Read more</Button> */}
                </Card>
              );
            })}
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default ShopByCategory;
