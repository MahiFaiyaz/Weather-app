import React from "react";
import styled from "@emotion/styled";
import Reel from "react-reel";

const Condition = ({ temp, forecast }) => {
  return (
    <>
      <div style={{ fontSize: "2rem" }}>
        <Reel theme={reelStyle} text={`${temp} °C`} />
      </div>
      <Forecast>{forecast}</Forecast>
    </>
  );
};

export default Condition;

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
