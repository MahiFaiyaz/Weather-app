import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, forecast, city, country, getWeather }) => {
  let highColour = 0;
  let lowColour = 0;
  let bg = null;
  if (temp > 10) {
    // Hot weather
    highColour = (1 - (temp - 10) / 30) * 255;
    lowColour = highColour - 200;

    bg = `linear-gradient(
      to top,
      rgb(255, ${highColour}, 0),
      rgb(255, ${Math.abs(lowColour)}, 0)
      )`;
  } else if (temp <= 10) {
    // Cold weather
    highColour = (1 - (temp + 20) / 30) * 255;
    lowColour = highColour - 150;

    bg = `linear-gradient(
      to top,
      rgb(0, ${highColour}, 255),
      rgb(0, ${Math.abs(lowColour)}, 255)
      )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
  `;

  return (
    <motion.div intial={{ scale: 0.2 }} animate={{ scale: 1 }}>
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon forecast={forecast} />
        <Condition temp={temp} forecast={forecast} />
      </Card>
    </motion.div>
  );
};

export default WeatherCard;
