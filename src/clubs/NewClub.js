import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import uploadImg from '../assets/icons/cloud-computing.svg'
import Button from './Button.js'
import add from '../assets/icons/add.svg'
import remove from '../assets/icons/remove.svg'
import rightArrow from '../assets/icons/right-arrow.svg'
import leftArrow from '../assets/icons/left-arrow.svg'
import axios from 'axios'
import NewClubInput from './NewClubInput'
import TeamInput from './TeamInput'
import { useHistory } from 'react-router-dom'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function NewClub({ onSubmit, onBackClick }) {
  const history = useHistory()
  const blankTeam = { teamName: '', league: '' }
  const teamNameRef = useRef()
  const [loading, setLoading] = useState({
    imageLoading: false,
    logoLoading: false,
  })
  const [newClub, setNewClub] = useState({
    name: '',
    slug: '',
    address: {
      city: '',
      houseNumber: '',
      zip: '',
      street: '',
    },
    image: '',
    logo: '',
    mail: '',
    phoneNumber: '',
    websiteURL: '',
    teams: [{ teamName: '', league: '' }],
  })
  function handleChange(event) {
    const name = event.target.name
    setNewClub({ ...newClub, [name]: event.target.value })
  }
  const addTeam = () => {
    setNewClub({ ...newClub, teams: [...newClub.teams, { ...blankTeam }] })
  }

  const removeTeam = () => {
    setNewClub({
      ...newClub,
      teams: newClub.teams.splice(0, newClub.teams.length - 1),
    })
  }

  useEffect(() => {
    if (newClub.teams.length > 1) {
      teamNameRef.current && teamNameRef.current.focus()
    }
  }, [newClub.teams.length])

  useEffect(() => {
    const newClubData = JSON.parse(localStorage.getItem('newClub'))

    if (newClubData) {
      setNewClub({ ...newClubData })
    } else {
      setNewClub(newClub => newClub)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('newClub', JSON.stringify(newClub))
  }, [newClub])

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    const target = event.target
    let name = target.name
    formData.append('file', target.files[0])
    formData.append('upload_preset', PRESET)

    if (name === 'clubImage') {
      setLoading({ imageLoading: true })
    } else if (name === 'logo') {
      setLoading({ logoLoading: true })
    }

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(response => onImageSave(response, name))
      .catch(err => console.error(err))
  }

  function onImageSave(response, name) {
    if (name === 'clubImage') {
      setNewClub({ ...newClub, image: response.data.secure_url })
      setLoading({ imageLoading: false })
    } else if (name === 'logo') {
      setNewClub({ ...newClub, logo: response.data.secure_url })
      setLoading({ logoLoading: false })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(newClub)
    history.push('/club/preview')
  }

  function handleAddressChange(event) {
    const name = event.target.name
    const value = event.target.value
    setNewClub({ ...newClub, address: { ...newClub.address, [name]: value } })
  }
  function handleTeamChange(event) {
    const updatedTeams = [...newClub.teams]
    updatedTeams[event.target.dataset.index][event.target.dataset.name] =
      event.target.value
    setNewClub({ ...newClub, teams: updatedTeams })
  }

  return (
    <NewClubForm onSubmit={handleSubmit}>
      <InputContainer>
        <h1>DEIN VEREIN !</h1>
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
            onChange={upload}
          />
          <UploadLabel
            htmlFor="logo"
            className={newClub.logo ? 'uploaded' : ''}
          >
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
            onChange={upload}
          />
        </UploadWrapper>
        <div>
          <FormHeader>Verein</FormHeader>
          <ClubWrapper>
            <NewClubInput
              type="text"
              name="name"
              placeholder="Vereinsname"
              onChange={handleChange}
              value={newClub.name}
            />
            <NewClubInput
              type="text"
              name="phoneNumber"
              placeholder="Telefon"
              onChange={handleChange}
              value={newClub.phoneNumber}
            />
            <NewClubInput
              type="text"
              name="mail"
              placeholder="E-Mail"
              onChange={handleChange}
              value={newClub.mail}
            />
            <NewClubInput
              type="text"
              name="websiteURL"
              placeholder="Website"
              onChange={handleChange}
              value={newClub.websiteURL}
            />
            <StreetNrWrapper>
              <NewClubInput
                type="text"
                name="street"
                placeholder="Straße"
                onChange={handleAddressChange}
                value={newClub.address.street}
              />
              <NewClubInput
                type="text"
                name="houseNumber"
                placeholder="Nr."
                onChange={handleAddressChange}
                value={newClub.address.houseNumber}
              />
            </StreetNrWrapper>
            <ZipCityWrapper>
              <NewClubInput
                type="text"
                name="zip"
                placeholder="PLZ"
                onChange={handleAddressChange}
                value={newClub.address.zip}
              />
              <NewClubInput
                type="text"
                name="city"
                placeholder="Stadt"
                onChange={handleAddressChange}
                value={newClub.address.city}
              />
            </ZipCityWrapper>
          </ClubWrapper>
        </div>
        <div>
          <FormHeader>Teams</FormHeader>
          <Button name="Add" src={add} onClick={addTeam} />
          <Button name="Remove" src={remove} onClick={removeTeam} />
          {newClub.teams.map((val, index) => (
            <TeamInput
              key={`teamName${index}`}
              index={index}
              reference={
                newClub.teams.length - 1 === index ? teamNameRef : null
              }
              teams={newClub.teams}
              onChange={handleTeamChange}
            />
          ))}
        </div>
      </InputContainer>
      <ButtonsWrapper>
        <ButtonLabel htmlFor="buttonBack" onClick={onBackClick}>
          <img src={leftArrow} alt="" />
        </ButtonLabel>
        <NewClubInput id="buttonBack" type="button" />
        <ButtonLabel htmlFor="submit">
          <img src={rightArrow} alt="" />
        </ButtonLabel>
        <NewClubInput id="submit" type="submit" />
      </ButtonsWrapper>
    </NewClubForm>
  )
}

const NewClubForm = styled.form`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
  gap: 10px;
  background: var(--dark);
  padding: 10px 20px;
`

const InputContainer = styled.div`
  display: grid;
  gap: 10px;
  overflow: scroll;
  h1 {
    justify-self: center;
    margin: 0;
    color: white;
    font-size: 2.8rem;
  }
`
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
  border: solid 1px white;
  border-radius: 20px;
  padding: 15px 10px;
  overflow: hidden;
  &.uploaded {
    background: white;
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
  color: white;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const FormHeader = styled.h2`
  font-size: 2.4rem;
  display: inline-block;
  color: white;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const ClubWrapper = styled.div`
  display: grid;
  gap: 12px;
  padding-left: 8px;
`

const StreetNrWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto 60px;
`
const ZipCityWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 60px auto;
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`
const ButtonLabel = styled.label`
  border-radius: 16px;
  background: white;
  width: 50px;
  height: 50px;
  padding: 5px;
  text-decoration: none;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
