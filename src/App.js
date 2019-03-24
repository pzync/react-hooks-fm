import React, { Component } from "react";
import "./App.css";
import SearchParams from "./SearchParams";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Forms using hooks</h1>
        <SearchParams />
      </div>
    );
  }
}

export default App;
