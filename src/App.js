import React from 'react'
import clubs from './clubs'
import GlobalStyles from './GlobalStyles'
import ClubList from './ClubList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubOverview from './ClubOverview'

export default function App() {
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
