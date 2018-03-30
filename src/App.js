import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import SearchBarContainer from "./containers/SearchBar";
import WeatherListContainer from "./containers/WeatherList";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBarContainer />
      <WeatherListContainer />
    </div>
  );
};

export default App;
