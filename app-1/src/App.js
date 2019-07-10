import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
  }

  handleMessage(text) {
    this.setState({
      message: text
  })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={event => this.handleMessage(event.target.value)} />
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;