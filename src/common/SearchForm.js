import React from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import { useSpring, animated } from 'react-spring'

export default function SearchForm({
  toggle,
  onClick,
  src,
  searchInputRef,
  onInput,
}) {
  const animateForm = useSpring({
    width: toggle ? '0%' : '100%',
    opacity: toggle ? '0' : '1',
  })

  return (
    <SearchFormStyled style={animateForm}>
      <Button onClick={onClick} src={src} alt="" />
      <SearchInput
        ref={searchInputRef}
        placeholder="Suchen..."
        onInput={onInput}
      />
    </SearchFormStyled>
  )
}
const SearchFormStyled = styled(animated.form)`
  display: flex;
  background: white;
  overflow: hidden;
  z-index: 200;
`
const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  margin-left: 4px;
  padding-right: 12px;
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
