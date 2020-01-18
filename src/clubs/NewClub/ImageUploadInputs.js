import React from 'react'
import styled from 'styled-components/macro'
import NewClubInput from './NewClubInput'

export default function ImageInputs({ newClub, loading, uploadImg, onChange }) {
  return (
    <UploadWrapper>
      <UploadLabel
        className={newClub.image ? 'uploaded' : ''}
        htmlFor="clubImage"
      >
        <UploadHeader
          style={
            loading.imageLoading || newClub.image
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          Vereinsfoto
        </UploadHeader>
        {loading.imageLoading ? (
          <UploadHeader>Loading...</UploadHeader>
        ) : (
          <img
            src={newClub.image ? newClub.image : uploadImg}
            className={newClub.image ? 'uploadedImg' : ''}
            alt=""
          />
        )}
      </UploadLabel>

      <NewClubInput
        type="file"
        id="clubImage"
        accept="image/*"
        name="clubImage"
        onChange={onChange}
      />
      <UploadLabel htmlFor="logo" className={newClub.logo ? 'uploaded' : ''}>
        <UploadHeader
          style={
            loading.logoLoading || newClub.logo
              ? { display: 'none' }
              : { display: 'block' }
          }
        >
          Logo
        </UploadHeader>
        {loading.logoLoading ? (
          <UploadHeader>Loading...</UploadHeader>
        ) : (
          <img src={newClub.logo ? newClub.logo : uploadImg} alt="" />
        )}
      </UploadLabel>
      <NewClubInput
        type="file"
        id="logo"
        accept="image/*"
        name="logo"
        onChange={onChange}
      />
    </UploadWrapper>
  )
}

const UploadWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 100px 100px;
`
const UploadLabel = styled.label`
  display: grid;
  grid-template-rows: 40px auto;
  justify-items: center;
  height: 100px;
  width: 100%;
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
