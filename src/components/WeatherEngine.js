import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: 0,
    city: null,
    country: null,
    forecast: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=442c8e95de23083337c7d5155e167e10`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        country: resJSON.sys.country,
        forecast: resJSON.weather[0].main,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  if (error) {
    return (
      <div style={{ color: "black" }}>
        City not found <br />
        <button onClick={() => setError(false)}>Reset!</button>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          width: "200px",
          height: "260px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PulseLoader size={15} color="purple" />
      </div>
    );
  }

  return (
    <WeatherCard
      temp={weather.temp}
      forecast={weather.forecast}
      city={weather.city}
      country={weather.country}
      getWeather={getWeather}
    />
  );
};

export default WeatherEngine;
