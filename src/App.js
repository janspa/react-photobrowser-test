import React from 'react'
import { hot } from 'react-hot-loader/root'
import './App.css'
import PhotoBrowser from './components/photos/PhotoBrowser'

function App() {
  return (
    <div className="App mx-auto pb-2">
      <header className="App-header">
        <p className="px-2 mt-4 mb-3 border-bottom">
          Photo Browser
        </p>
      </header>
      <PhotoBrowser />
    </div>
  )
}

export default hot(App)
