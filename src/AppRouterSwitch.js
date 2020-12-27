import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import PhotoBrowser from './components/photos/PhotoBrowser'
import PhotoDetails from './components/photos/PhotoDetails'

export default function AppRouterSwitch() {
  return (
    <Switch>
      <Route path="/details/:photoId">
        <PhotoDetails />
      </Route>
      <Route path={["/:page", "/"]}>
        <PhotoBrowser />
      </Route>
    </Switch>
  )
}
