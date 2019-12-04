import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import ClubList from './ClubList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubOverview from './ClubOverview'
import { getClubs } from './services.js'

export default function App() {
  const [clubs, setClubs] = useState([])
  useEffect(() => {
    getClubs().then(setClubs)
  }, [])

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <ClubList clubs={clubs} />
          </Route>
          <Route path="/club/:slug">
            <ClubOverview clubs={clubs} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
