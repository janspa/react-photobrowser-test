import React, { Component } from 'react'
import { hot } from 'react-hot-loader/root'
import './App.css'
import PhotoGrid from './components/PhotoGrid'

class App extends Component {
  render() {
    return (
      <div className="App mx-auto pb-2">
        <header className="App-header">
          <p className="px-2 border-bottom">
            Photo Browser
          </p>
        </header>
        <PhotoGrid />
      </div>
    )
  }
}

export default hot(App)
