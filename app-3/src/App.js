import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      filterString: "",
      dataArray: ["some","body","toucha","mine", "spaghet"]
     };
  }

  handleFilterString(val) {
    this.setState({
      filterString: val
    })
  }
  render() {
    let itemPredict = this.state.dataArray.filter((element,index) => {
      return element.includes(this.state.filterString)
    }).map((element,index) => {
      return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input 
        type="text"
        onChange={event => this.handleFilterString(event.target.value)} 
        />
        <p>{itemPredict}</p>
      </div>
    );
  }
}

export default App;