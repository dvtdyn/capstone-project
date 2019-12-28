import React, { useState, useEffect } from 'react'
import GlobalStyles from './GlobalStyles'
import ClubList from './clubs/ClubList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubOverview from './clubs/ClubOverview'
import { getClubs, postClub } from './services.js'
import NewClub from './clubs/NewClub'

export default function App() {
  const [clubs, setClubs] = useState([])
  const [newClub, setNewClub] = useState({})
  useEffect(() => {
    getClubs().then(setClubs)
  }, [])

  function createNewClub(clubData) {
    postClub(clubData).then(club => setClubs([...clubs, club]))
  }

  function handleOnSubmit(clubData) {
    setNewClub(clubData)
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
            <NewClub onSubmit={handleOnSubmit} />
          </Route>
          <Route path="/club/preview">
            <ClubOverview clubs={newClub} />
          </Route>
          <Route path="/club/:slug">
            <ClubOverview clubs={clubs} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
