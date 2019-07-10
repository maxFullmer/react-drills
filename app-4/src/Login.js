import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user: "",
            pass: ""
         };
         this.handleLogin = this.handleLogin.bind(this)
    }

    handleUser(val) {
        this.setState({
            user: val
        })
    }  

    handlePass(val) {
        this.setState({
            pass: val
        })
    }

    handleLogin() {
        alert(`User: ${this.state.user} Password: ${this.state.pass}`)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={event => this.handleUser(event.target.value)}/>
                <input type="text" onChange={event => this.handlePass(event.target.value)}/>
                <button value="Login" onClick={this.handleLogin}></button>
            </div>
            
        );
    }
}

export default Login;