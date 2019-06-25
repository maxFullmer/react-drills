import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: ""
    }
  }

  updateText(value) {
    this.setState({
      message: value
    })
  }


  render() {
    return (
      <div className="App">
        <input onChange={(event) => this.updateText(event.target.value)} type="text" />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
