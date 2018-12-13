import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scoreboard />
      </div>
    );
  }
}

export default hot(module)(App);
