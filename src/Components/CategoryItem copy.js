import styled from "styled-components";
import {
  bigMobiles,
  mediumLargeTablets,
  mediumTablets,
  smallerScreen,
  smallerTablets,
  smallScreen,
  tablets,
} from "../Responsive";

const Hover1 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffeea6;
  position: absolute;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
`;
const Hover2 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #5499af;
  position: absolute;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
`;
const Hover3 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fed3d5;
  position: absolute;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
`;
const Hover4 = styled.div`
  height: 100%;
  width: 100%;
  background-color: #e33b2b;
  position: absolute;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.5s ease;
`;
const Container = styled.div`
  font-family: "Urbanist", sans-serif;
`;
const Heading = styled.h1`
  text-align: center;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  display: grid;
  margin: 150px 350px;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1.2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "TopLeft TopLeft Right"
    "L1 R1 Right";
  ${smallScreen({ height: "90vh", margin: "135px 320px" })}
  ${smallerScreen({ height: "75vh", margin: "125px 280px" })}
${tablets({ height: "60vh", margin: "100px 275px" })}
${mediumLargeTablets({ height: "55vh", margin: "80px 210px" })}
${mediumTablets({ height: "50vh", margin: "80px 170px" })}
${smallerTablets({ height: "40vh", margin: "80px 120px" })}
${bigMobiles({
    display: "flex",
    flexDirection: "column",
    margin: "20px 40px",
    height: "120vh",
  })}
`;
const TopLeft = styled.div`
  grid-area: TopLeft;
  overflow: hidden;
  padding: 10px;
  font-size: 30px;
  font-weight: 700;
  position: relative;
  &:hover ${Hover1} {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }

  ${bigMobiles({
    height: "100%",
    margin: "20px",
    boxShadow:
      "3.4px 2.2px 3.1px rgba(0, 0, 0, 0.027),9.3px 6.1px 8.6px rgba(0, 0, 0, 0.045),22.3px 14.8px 20.8px rgba(0, 0, 0, 0.064),74px 49px 69px rgba(0, 0, 0, 0.09)",
  })}
`;
const HeadingTl = styled.h1`
  text-align: center;
  font-size: 24px;
  padding-left: 20px;
  text-align: left;
  ${mediumTablets({ fontSize: "18px" })}
  ${smallerTablets({ fontSize: "15px", paddingLeft: "10px  " })}
${bigMobiles({ fontSize: "18px", paddingLeft: "10px  " })}
`;
const L1 = styled.div`
  grid-area: L1;
  padding: 10px;
  font-size: 30px;
  position: relative;
  overflow: hidden;
  font-weight: 700;
  box-shadow: 3.4px 2.2px 3.1px rgba(0, 0, 0, 0.027),
    9.3px 6.1px 8.6px rgba(0, 0, 0, 0.045),
    22.3px 14.8px 20.8px rgba(0, 0, 0, 0.064),
    74px 49px 69px rgba(0, 0, 0, 0.09);
  &:hover ${Hover2} {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }
  ${bigMobiles({ height: "100%", margin: "20px" })}
`;
const R1 = styled.div`
  grid-area: R1;
  padding: 10px;
  font-size: 30px;
  position: relative;
  overflow: hidden;
  font-weight: 700;
  box-shadow: 3.4px 2.2px 3.1px rgba(0, 0, 0, 0.027),
    9.3px 6.1px 8.6px rgba(0, 0, 0, 0.045),
    22.3px 14.8px 20.8px rgba(0, 0, 0, 0.064),
    74px 49px 69px rgba(0, 0, 0, 0.09);
  &:hover ${Hover3} {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }
  ${bigMobiles({ height: "100%", margin: "20px" })}
`;
const Right = styled.div`
  padding: 10px;
  position: relative;
  grid-area: Right;
  overflow: hidden;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 3.4px 2.2px 3.1px rgba(0, 0, 0, 0.027),
    9.3px 6.1px 8.6px rgba(0, 0, 0, 0.045),
    22.3px 14.8px 20.8px rgba(0, 0, 0, 0.064),
    74px 49px 69px rgba(0, 0, 0, 0.09);
  &:hover ${Hover4} {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease;
  }
  ${bigMobiles({ height: "100%", margin: "20px" })}
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  padding: 5px;
  ${mediumTablets({ height: "90%", width: "90%" })}
`;
const Title1 = styled.div`
  color: white;
  width: 100%;
  background-color: #ffeea6;
  padding: 20px;
  &:hover {
    color: white;
  }
`;
const Title2 = styled.div`
  width: 100%;
  color: white;
  background-color: #5499af;
  padding: 20px;
  &:hover {
    color: white;
  }
`;
const Title3 = styled.div`
  width: 100%;
  color: white;
  background-color: #fed3d5;
  padding: 20px;
  &:hover {
    color: white;
  }
`;
const Title4 = styled.div`
  width: 100%;
  color: white;
  background-color: #e33b2b;
  padding: 20px;
  &:hover {
    color: white;
  }
`;
const Desc = styled.p`
  padding: 20px;
  font-size: 24px;
  color: white;
`;
const Button1 = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 30%;
  margin: 10px 20px;
  padding: 15px 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #ffeea6;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Button2 = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 30%;
  margin: 10px 20px;
  padding: 10px;
  letter-spacing: 1px;
  color: #5499af;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Button3 = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 30%;
  margin: 10px 20px;
  padding: 10px;
  letter-spacing: 1px;
  color: #fed3d5;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const Button4 = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  width: 30%;
  margin: 10px 20px;
  padding: 10px;
  letter-spacing: 1px;
  color: #e33b2b;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
const CategoryItem = () => {
  return (
    <Container>
      <Heading>Hover on the images to see categories.</Heading>
      <Wrapper>
        <TopLeft>
          <HeadingTl>Probiotics</HeadingTl>
          <Hover1>
            <Title1>Probiotics</Title1>
            <Desc>
              Probiotics are live bacteria and yeasts that are good for you,
              especially your digestive system. We usually think of these as
              germs that cause diseases. But your body is full of bacteria, both
              good and bad. Probiotics are often called "good" or "helpful"
              bacteria because they help keep your gut healthy.
            </Desc>
            <Button1>Contact Us</Button1>
          </Hover1>
          <Img src="probiotics.png" />
        </TopLeft>
        <L1>
          <HeadingTl>Supplements</HeadingTl>
          <Hover2>
            <Title2>Supplements</Title2>
            <Desc>
              While dietary supplements cannot take the place of healthy eating
              habits, they can provide adequate amounts of essential nutrients
              when used responsibly.
            </Desc>
            <Button2>Contact Us</Button2>
          </Hover2>
          <Img src="supplements2.png" />
        </L1>
        <R1>
          <HeadingTl>Enzymes</HeadingTl>
          <Hover3>
            <Title3>Enzymes</Title3>
            <Desc>
              Enzymes are proteins that act as biological catalysts. Catalysts
              accelerate chemical reactions. The molecules upon which enzymes
              may act are called substrates, and the enzyme converts the
              substrates into different molecules known as products.
            </Desc>
            <Button3>Contact Us</Button3>
          </Hover3>
          <Img src="enzymes2.png" />
        </R1>
        <Right>
          <HeadingTl>Nutraceuticals</HeadingTl>
          <Hover4>
            <Title4>Nutraceuticals</Title4>
            <Desc>
              A nutraceutical product may be defined as a substance, which has
              physiological benefit or provides protection against chronic
              disease. Nutraceuticals may be used to improve health, delay the
              aging process, prevent chronic diseases, increase life expectancy,
              or support the structure or function of the body.
            </Desc>
            <Button4>Contact Us</Button4>
          </Hover4>
          <Img src="nutraceuticals.png" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default CategoryItem;
