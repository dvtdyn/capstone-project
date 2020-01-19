import React from 'react'
import styled from 'styled-components/macro'
import { NavLink, Link } from 'react-router-dom'
import addLight from '../assets/icons/add-light.svg'
import searchIcon from '../assets/icons/search-icon.svg'
import leftArrow from '../assets/icons/left-arrow.svg'
import logo from '../assets/icons/logo.svg'
import { useSpring, animated } from 'react-spring'
import Button from '../common/Button.js'
import SearchForm from '../common/SearchForm'
import Logo from '../common/Logo'

export default function Header({
  toggle,
  onSearchButtonClick,
  onInput,
  closeSearch,
  searchInputRef,
  LinkAddNewElement,
}) {
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

  return (
    <HeaderContainer style={animateHeader}>
      <HeaderRow>
        <ButtonWrapper style={animateButton}>
          <Logo src={logo} />
          <div>
            <Button onClick={onSearchButtonClick} src={searchIcon} />
            <LinkStyled to={LinkAddNewElement}>
              <img src={addLight} alt="" />
            </LinkStyled>
          </div>
        </ButtonWrapper>
        <SearchForm
          toggle={toggle}
          onClick={closeSearch}
          src={leftArrow}
          searchInputRef={searchInputRef}
          placeholder="Suchen..."
          onInput={onInput}
        />
      </HeaderRow>

      <TabWrapper style={animateTab}>
        <Tab exact to="/">
          Vereine
        </Tab>
        <Tab to="/clubs/map">Maps</Tab>
        <Tab to="/player">Spieler</Tab>
      </TabWrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled(animated.header)`
  background: var(--dark);
  height: 100px;
  display: grid;
  box-shadow: 0 0 4px 0 #bdc2d5;
`

const LinkStyled = styled(Link)`
  display: inline-block;
  margin: 0;
  background: none;
  height: 50px;
  width: 50px;
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

const HeaderRow = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
`
const TabWrapper = styled(animated.div)`
  display: grid;
  grid-auto-flow: colums;
  grid-template-columns: auto auto auto;
  height: 50px;
`

const Tab = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-weight: 300;
  color: white;
  font-size: 2rem;
  text-decoration: none;
  cursor: default;
  opacity: 0.5;

  &.active {
    border-bottom: 3px solid white;
    opacity: 1;
  }
`

const ButtonWrapper = styled(animated.div)`
  display: flex;
  justify-content: space-between;
`
