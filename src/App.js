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

  useEffect(() => {
    const newClubData = JSON.parse(localStorage.getItem('newClub'))

    if (newClubData) {
      setNewClub({ ...newClubData })
    } else {
      setNewClub(newClub => newClub)
    }
  }, [])
  function createNewClub() {
    postClub(newClub).then(club => setClubs([...clubs, club]))
    localStorage.clear()
  }

  function handleOnSubmit(clubData) {
    setNewClub(clubData)
    window.location = '/club/preview'
  }

  function handleBackClick() {
    localStorage.clear()
    window.history.back()
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <ClubList clubs={clubs} />
          </Route>
          <Route exact path="/clubs/map">
            <ClubList clubs={clubs} />
          </Route>

          <Route exact path="/club/add-new-club">
            <NewClub onSubmit={handleOnSubmit} onBackClick={handleBackClick} />
          </Route>
          <Route path="/club/preview">
            <ClubOverview clubs={newClub} onSubmit={createNewClub} />
          </Route>
          <Route path="/club/:slug">
            <ClubOverview clubs={clubs} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
