import React, { useState, useRef } from 'react'
import Fuse from 'fuse.js'
import styled from 'styled-components/macro'
import Club from './Club'
import { Link } from 'react-router-dom'
import addLight from '../assets/icons/add-light.svg'
import searchIcon from '../assets/icons/search-icon.svg'
import leftArrow from '../assets/icons/left-arrow.svg'
import { useSpring, animated } from 'react-spring'
import MapContainer from './MapContainer'

export default function ClubList({ clubs }) {
  const [toggle, setToggle] = useState(true)
  const searchInputRef = useRef()
  const [searchInput, setSearchInput] = useState('')
  function onSearchButtonClick() {
    setToggle(!toggle)
    searchInputRef.current.focus()
  }

  const animateForm = useSpring({
    width: toggle ? '0%' : '100%',
    opacity: toggle ? '0' : '1',
  })
  const animateButton = useSpring({
    width: !toggle ? '0%' : '100%',
    opacity: !toggle ? '0' : '1',
  })
  const animateTab = useSpring({
    height: !toggle ? '0px' : '50px',
    opacity: !toggle ? '0' : '1',
  })
  const animateHeader = useSpring({
    height: !toggle ? '50px' : '100px',
  })

  const options = {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 50,
    maxPatternLength: 12,
    minMatchCharLength: 3,
    keys: ['name', 'teams.teamName', 'teams.league'],
  }
  function onInput(event) {
    event.preventDefault()
    setSearchInput(event.target.value)
  }

  function closeSearch() {
    setToggle(!toggle)
    setSearchInput('')
  }
  const fuse = new Fuse(clubs, options)
  const result = searchInput ? fuse.search(searchInput) : clubs

  return (
    <Grid>
      <Header style={animateHeader}>
        <HeaderRow>
          <ButtonWrapper style={animateButton}>
            <Button to={window.location.pathname} onClick={onSearchButtonClick}>
              <img src={searchIcon} alt="" />
            </Button>
            <Button to="/club/add-new-club">
              <img src={addLight} alt="" />
            </Button>
          </ButtonWrapper>
          <SearchForm style={animateForm}>
            <Button
              to={window.location.pathname}
              onClick={closeSearch}
              style={{
                background: 'white',
                padding: '15px',
              }}
            >
              <img src={leftArrow} alt="" />
            </Button>
            <SearchInput
              ref={searchInputRef}
              placeholder="Suchen..."
              onInput={onInput}
            ></SearchInput>
          </SearchForm>
        </HeaderRow>

        <TabWrapper style={animateTab}>
          <Tab
            to="/"
            style={{
              borderBottom: `${
                !toggle
                  ? 'none'
                  : window.location.pathname === '/'
                  ? '3px solid white'
                  : window.location.pathname === '/clubs/map'
                  ? '3px solid #494e61'
                  : ''
              }`,
            }}
          >
            Vereine
          </Tab>
          <Tab
            to="/clubs/map"
            style={{
              borderBottom: `${
                !toggle
                  ? 'none'
                  : window.location.pathname === '/'
                  ? '3px solid #494e61'
                  : window.location.pathname === '/clubs/map'
                  ? '3px solid white'
                  : ''
              }`,
            }}
          >
            Maps
          </Tab>
          <Tab
            style={{
              borderBottom: `${!toggle ? 'none' : '3px solid #494e61'}`,
            }}
            to=""
          >
            Spieler
          </Tab>
        </TabWrapper>
      </Header>
      {window.location.pathname === '/' ? (
        <ClubListContainer>
          {result
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(({ logo, name, websiteURL, _id, phoneNumber, mail, slug }) => (
              <Club
                key={_id}
                logo={logo}
                name={name}
                websiteURL={websiteURL}
                phoneNumber={phoneNumber}
                mail={mail}
                slug={slug}
              />
            ))}
        </ClubListContainer>
      ) : window.location.pathname === '/clubs/map' ? (
        <MapContainer clubs={result} />
      ) : (
        ''
      )}
    </Grid>
  )
}

const Grid = styled.section`
  grid-template-rows: auto 1fr;
  display: grid;
  height: 100vh;
`
const Header = styled(animated.header)`
  background: var(--dark);
  height: 100px;
  display: grid;
  box-shadow: 0 0 4px 0 #bdc2d5;
`
const HeaderRow = styled.div`
  display: flex;
`
const TabWrapper = styled(animated.div)`
  display: grid;
  grid-auto-flow: colums;
  grid-template-columns: auto auto auto;
  height: 50px;
`

const Tab = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  font-weight: 300;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  cursor: default;
`
const SearchForm = styled(animated.form)`
  display: flex;
  justify-self: flex-end;
  background: white;
  overflow: hidden;
  height: 50px;
  width: 100%;
`
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  margin-left: 4px;
  font-size: 1.6rem;
  border: none;
  color: var(--dark);
  ::placeholder {
    font-size: 1.6rem;
  }
  :focus {
    outline: none;
  }
`

const ButtonWrapper = styled(animated.div)`
  display: flex;
  justify-content: flex-end;
  height: 50px;
`

const Button = styled(Link)`
  margin: 0;
  height: 100%;
  padding: 16px;
  border: none;
  outline: none;
  cursor: default;
  img {
    height: 100%;
  }
  :focus {
    border: none;
    outline: none;
  }
`
const ClubListContainer = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
