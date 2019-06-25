import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super()

    this.state = {
      foodList: ["sushi","pizza","blackened mahi mahi fish tacos"]
    }
  }


  render() {
    let foodsToDisplay = this.state.foodList.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    })
    return (
      <div className="App">
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;
