import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataList: ["who", "said", "that"]
     };
  }
  render() {
    let dataToDisplay = this.state.dataList.map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        {dataToDisplay}
      </div>
    );
  }
}

export default App;