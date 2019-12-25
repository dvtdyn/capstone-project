import React from 'react'
import styled from 'styled-components/macro'

export default function ClubButton({ href, src, alt, target = '_self' }) {
  return (
    <ButtonContainer href={href} target={target}>
      <img src={src} alt={alt} />
    </ButtonContainer>
  )
}

const ButtonContainer = styled.a`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  text-decoration: none;
`
