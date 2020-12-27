import React from 'react'
import {
  Link,
  useRouteMatch,
} from 'react-router-dom'

export default function AppHeader() {
  const matchDetails = useRouteMatch({ path: "/details/:id" })
  return (
    <header className="App-header">
      <div className="px-2 pt-4 mb-3 border-bottom">
        <Link to="/">Photo Browser</Link>
        {matchDetails && <span> <span className="muted">&#187;</span> <Link to={`/details/${matchDetails.params.id}`}>#{matchDetails.params.id}</Link></span>}
      </div>
    </header>
  )
}
