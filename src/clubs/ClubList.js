import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import Club from './Club'
import { Link } from 'react-router-dom'
import addLight from '../assets/icons/add-light.svg'
import searchIcon from '../assets/icons/search-icon.svg'
import leftArrow from '../assets/icons/left-arrow.svg'
import { useSpring, animated } from 'react-spring'

export default function ClubList({ clubs }) {
  const [toggle, setToggle] = useState(true)
  const searchInputRef = useRef()
  function onSearchButtonClick() {
    setToggle(!toggle)
    searchInputRef.current.focus()
  }
  const animateForm = useSpring({
    width: toggle ? '0%' : '100%',
    display: toggle ? 'none' : 'flex',
  })
  const animateButton = useSpring({
    width: !toggle ? '0%' : '100%',
    height: !toggle ? '50px' : '60px',
  })

  return (
    <Grid>
      <Header>
        <ButtonWrapper style={animateButton}>
          <Button to="" onClick={onSearchButtonClick}>
            <img src={searchIcon} alt="" />
          </Button>
          <Button to="/club/add-new-club">
            <img src={addLight} alt="" />
          </Button>
        </ButtonWrapper>
        <SearchForm style={animateForm}>
          <Button
            to=""
            onClick={() => setToggle(!toggle)}
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
          ></SearchInput>
        </SearchForm>
      </Header>
      <ClubListContainer>
        {clubs
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
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  /* gap: 16px; */
`
const Header = styled.header`
  background: var(--dark);
  display: flex;
  align-items: center;
  box-shadow: 0 0 4px 0 #bdc2d5;
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
  height: 60px;
`

const Button = styled(Link)`
  margin: 0;
  height: 100%;
  padding: 20px;
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
