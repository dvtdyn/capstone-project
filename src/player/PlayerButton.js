import React from 'react'
import styled from 'styled-components/macro'

export default function PlayerButton({ href, src, alt, target = '_self' }) {
  return (
    <ButtonContainer href={href} target={target}>
      <img src={src} alt={alt} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a`
  display: flex;
  justify-content: center;
  padding: 12px;
  width: 50px;
  height: 50px;
  text-decoration: none;
  cursor: default;

  img {
    height: 100%;
    width: 100%;
  }
`
