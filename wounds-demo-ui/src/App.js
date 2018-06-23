import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Network from './utils/network'

class App extends Component {
  componentDidMount() {
    Network.get("http://localhost:3000/patients")
    Network.get("http://localhost:3000/patients/3/wounds").then(res => console.log(res))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
