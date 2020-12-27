import React from 'react'
import {
  HashRouter as Router,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import './App.css'
import AppRouterSwitch from './AppRouterSwitch'
import AppHeader from './AppHeader'

function App() {
  return (
    <Router>
      <div className="App my-0 mx-auto pb-2">
        <AppHeader />
        <AppRouterSwitch />
      </div>
    </Router>
  )
}

export default hot(App)
