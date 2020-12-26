import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Hamilton, Ca" />
    </div>
  );
}

export default App;
