import styled from 'styled-components/macro'
import React from 'react'

export default function Button({ type, onClick, src }) {
  return (
    <>
      <ImgLabel htmlFor={`button${type}`}>
        <img src={src} alt="" />
      </ImgLabel>
      <Input
        type={`button${type}`}
        id={`button${type}`}
        name={`button${type}`}
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
