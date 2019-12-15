import React from 'react'
import styled from 'styled-components/macro'
import uploadImg from './assets/icons/cloud-computing.svg'

export default function Upload() {
  return (
    <UploadWrapper>
      <Label htmlFor="clubimage">
        <UploadHeader>Vereinsfoto</UploadHeader>
        <img src={uploadImg} alt="" />
      </Label>
      <Label htmlFor="clubimage">
        <UploadHeader>Vereinsfoto</UploadHeader>
        <img src={uploadImg} alt="" />
      </Label>
    </UploadWrapper>
  )
}
const UploadWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* 
  */
`

const Label = styled.label`
  background-color: white;
  display: grid;
  grid-template-rows: 30px auto;
  justify-items: center;
  height: 110px;
  width: 110px;
  border-radius: 20px;
  padding: 15px 10px;
  overflow: hidden;

  /* 

  &.uploaded {
    padding: 0;
    grid-template-rows: auto;
  }

  */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const UploadHeader = styled.h2`
  font-size: 2rem;
  color: var(--dark);
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
