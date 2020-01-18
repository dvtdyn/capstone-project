import React from 'react'
import styled from 'styled-components/macro'

export default function Main({ children }) {
  return <MainStyled>{children}</MainStyled>
}

const MainStyled = styled.main`
  display: grid;
  align-content: flex-start;
  overflow: auto;
  z-index: 100;
  ::-webkit-scrollbar {
    display: none;
  }
`
