import React, { useState } from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, forecast }) => {
  const [unit, SetUnit] = useState("°C");
  const [text, setText] = useState(temp);

  const CeltoFar = (Cel) => {
    let Far = Cel * (9 / 5) + 32;
    setText(Far);
  };

  const FartoCel = (Far) => {
    let Cel = (Far - 32) * (5 / 9);
    setText(Cel);
  };

  const handleUnit = () => {
    if (unit === "°C") {
      SetUnit("°F");
      CeltoFar(text);
    } else {
      SetUnit("°C");
      FartoCel(text);
    }
  };

  return (
    <>
      <Container>
        <Reel theme={reelStyle} text={`${text.toFixed(1)}`} />
        <UnitButton onClick={() => handleUnit()}>{unit}</UnitButton>
      </Container>
      <Forecast>{forecast}</Forecast>
    </>
  );
};

export default Condition;

const Container = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

const UnitButton = styled.span`
  cursor: pointer;
`;

const Forecast = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

const reelStyle = {
  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    justifyContent: "center",
    lineHeight: "0.97em",
  },
  group: {
    transitionDelay: "0",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1.5em",
  },

  number: {
    height: "1em",
  },
};
