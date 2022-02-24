import React from 'react'
import { probiotics, enzymes, probioticBlends, nutraceuticals } from "../Data";

useEffect(() => {
    if (selected === "probiotics") {
      probiotics.map
    }
  }, [selected]);
function Card(props) {
        props.selected.map((element) => {
            return (
              <Card>
                <Text>{element.name}</Text>
                <Address>{element.description}</Address>
              </Card>
            );
          });
      }


export default Card