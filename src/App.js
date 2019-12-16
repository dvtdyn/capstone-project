import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import ClubList from './ClubList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubOverview from './ClubOverview'
import { getClubs, postClub } from './services.js'
import NewClub from './NewClub'

export default function App() {
  const [clubs, setClubs] = useState([])
  // const [newClub, setNewClub] = useState({})
  useEffect(() => {
    getClubs().then(setClubs)
  }, [])

  function createNewClub(clubData) {
    postClub(clubData).then(club => setClubs([...clubs, club]))
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <ClubList clubs={clubs} />
          </Route>
          <Route exact path="/club/add-new-club">
            <NewClub onSubmit={createNewClub} />
          </Route>
          <Route path="/club/:slug">
            <ClubOverview clubs={clubs} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
