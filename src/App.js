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
          <Route exact path="/" render={() => <ClubList clubs={clubs} />} />
          <Route path="/club" render={() => <ClubOverview />} />
        </Switch>
      </Router>
    </>
  )
}
