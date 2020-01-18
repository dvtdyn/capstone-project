import React from 'react'
import styled from 'styled-components/macro'

export default function Button({ onClick, src }) {
  return (
    <ButtonStyled onClick={onClick}>
      <img src={src} alt="" />
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
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
