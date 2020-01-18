import React from 'react'
import styled from 'styled-components/macro'

export default function Logo({ src }) {
  return (
    <LogoStyled>
      <img src={src} alt="" />
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
  height: 50px;
  padding-top: 5px;
  padding-left: 5px;
  img {
    height: 100%;
  }
`
