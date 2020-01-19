import React from 'react'
import styled from 'styled-components/macro'
import NewPlayerInput from './NewPlayerInput.js'

export default function ImageInputs({
  newPlayer,
  loading,
  uploadImg,
  onChange,
}) {
  return (
    <UploadWrapper>
      <UploadLabel
        htmlFor="profileImage"
        className={newPlayer.profileImage ? 'uploaded' : ''}
      >
        <UploadHeader
          style={
            loading.profileImageLoading || newPlayer.profileImage
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          Profilbild
        </UploadHeader>
        {loading.profileImageLoading ? (
          <UploadHeader>Loading...</UploadHeader>
        ) : (
          <img
            src={newPlayer.profileImage ? newPlayer.profileImage : uploadImg}
            alt=""
          />
        )}
      </UploadLabel>
      <NewPlayerInput
        type="file"
        id="profileImage"
        accept="image/*"
        name="profileImage"
        onChange={onChange}
      />
    </UploadWrapper>
  )
}

const UploadWrapper = styled.div`
  display: grid;
  justify-content: center;
`
const UploadLabel = styled.label`
  display: grid;
  grid-template-rows: 40px auto;
  justify-items: center;
  height: 100px;
  width: 100px;
  border: solid 1px var(--dark);
  border-radius: 20px;
  padding: 15px 10px;
  overflow: hidden;
  &.uploaded {
    padding: 0;
    grid-template-rows: auto;
    border: none;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    &.uploadedImg {
      object-fit: cover;
    }
  }
`

const UploadHeader = styled.h2`
  font-size: 1.6rem;
  color: var(--dark);
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
