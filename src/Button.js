import styled from 'styled-components/macro'
import React from 'react'

export default function Button({ name, onClick, src }) {
  return (
    <>
      <ImgLabel htmlFor={`button${name}`}>
        <img src={src} alt="" />
      </ImgLabel>
      <Input
        type="button"
        id={`button${name}`}
        name={`button${name}`}
        onClick={onClick}
      />
    </>
  )
}

const ImgLabel = styled.label`
  display: inline-block;
  margin-left: 20px;

  img {
    height: 35px;
  }
`

const Input = styled.input`
  display: none;
`
