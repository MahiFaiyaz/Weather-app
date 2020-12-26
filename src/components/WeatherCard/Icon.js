import React from "react";
import styled from "@emotion/styled";

const Icon = ({ forecast }) => {
  const Icon = styled.img`
    width: 40%;
  `;
  var icon = "";
  switch (forecast) {
    case "Clouds":
      icon = require("./img/Mostly Cloudy.png");
      break;

    case "Clear":
      icon = require("./img/Mostly Sunny.png");
      break;

    case "Haze":
      icon = require("./img/Haze.png");
      break;

    case "Hail":
      icon = require("./img/Hail.png");
      break;

    case "Fog":
      icon = require("./img/Fog.png");
      break;

    case "Tornado":
      icon = require("./img/Tornado.png");
      break;

    case "Dust":
      icon = require("./img/Dust.png");
      break;

    case "Mist":
      icon = require("./img/Fog.png");
      break;

    case "Snow":
      icon = require("./img/Snow.png");
      break;

    case "Rain":
      icon = require("./img/Rain.png");
      break;

    case "Drizzle":
      icon = require("./img/Drizzle.png");
      break;

    case "Thunderstorm":
      icon = require("./img/Severe Thunderstorm.png");
      break;

    default:
      break;
  }

  return <Icon src={icon.default} alt={forecast} />;
};

export default Icon;
