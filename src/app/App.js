import React, { useState, useEffect, useRef } from 'react'
import ClubList from '../clubs/ClubList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubOverview from '../clubs/ClubOverview'
import { getClubs, postClub, getPlayer, postPlayer } from '../services.js'
import NewClub from '../clubs/NewClub/NewClub'
import Header from './Header'
import MapContainer from '../clubs/MapContainer'
import styled from 'styled-components/macro'
import PlayerList from '../player/PlayerList'
import NewPlayer from '../player/NewPlayer/NewPlayer.js'

export default function App() {
  const [clubs, setClubs] = useState([])
  const [newClub, setNewClub] = useState({})
  const [player, setPlayer] = useState([])
  const [toggle, setToggle] = useState(true)
  const searchInputRef = useRef()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getClubs().then(res => {
      setClubs(res)
    })

    const newClubData = JSON.parse(localStorage.getItem('newClub'))

    if (newClubData) {
      setNewClub({ ...newClubData })
    } else {
      setNewClub(newClub => newClub)
    }
  }, [])

  useEffect(() => {
    getPlayer().then(res => {
      setPlayer(res)
    })
  }, [])
  console.log(player)
  return (
    <Router>
      <Grid>
        <Switch>
          <Route exact path="/">
            <Header
              toggle={toggle}
              onSearchButtonClick={onSearchButtonClick}
              onInput={onInput}
              closeSearch={closeSearch}
              searchInputRef={searchInputRef}
              LinkAddNewElement="/club/add-new-club"
            />
            <ClubList clubs={clubs} searchInput={searchInput} />
          </Route>
          <Route path="/clubs/map">
            <Header
              toggle={toggle}
              onSearchButtonClick={onSearchButtonClick}
              onInput={onInput}
              closeSearch={closeSearch}
              searchInputRef={searchInputRef}
              LinkAddNewElement="/club/add-new-club"
            />
            <MapContainer clubs={clubs} searchInput={searchInput} />
          </Route>
          <Route exact path="/player">
            <Header
              toggle={toggle}
              onSearchButtonClick={onSearchButtonClick}
              onInput={onInput}
              closeSearch={closeSearch}
              searchInputRef={searchInputRef}
              LinkAddNewElement="/player/add-new-player"
            />
            <PlayerList player={player} searchInput={searchInput} />
          </Route>

          <Route exact path="/club/add-new-club">
            <NewClub onSubmit={handleOnSubmit} onBackClick={handleBackClick} />
          </Route>
          <Route exact path="/player/add-new-player">
            <NewPlayer
              onSubmit={createNewPlayer}
              onBackClick={handleBackClick}
            />
          </Route>

          <Route path="/club/preview">
            <ClubOverview clubs={newClub} onSubmit={createNewClub} />
          </Route>
          <Route path="/club/:slug">
            <ClubOverview clubs={clubs} onBackClick={handleBackClick} />
          </Route>
        </Switch>
      </Grid>
    </Router>
  )

  function onSearchButtonClick() {
    setToggle(!toggle)
    searchInputRef.current.focus()
  }

  function onInput(event) {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  function closeSearch(event) {
    event.preventDefault()
    setToggle(!toggle)
    setSearchInput('')
  }

  function createNewClub(clubsData) {
    setClubs([...clubs, clubsData])
    postClub(clubsData).then(club => {
      setClubs([...clubs, club])
      getClubs().then(res => setClubs(res))
    })
    localStorage.clear()
  }

  function createNewPlayer(playerData) {
    setPlayer([...player, playerData])
    postPlayer(playerData).then(newPlayer => {
      setPlayer([...player, newPlayer])
      getPlayer().then(res => setPlayer(res))
    })
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
}
const Grid = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`
