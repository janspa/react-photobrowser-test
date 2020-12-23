import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Photo Browser
          </p>
        </header>
      </div>
    )
  }
}

export default hot(App);
