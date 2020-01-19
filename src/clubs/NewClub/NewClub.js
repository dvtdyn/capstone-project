import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import uploadImg from '../../assets/icons/cloud-computing-dark.svg'
import rightArrow from '../../assets/icons/right-arrow-light.svg'
import leftArrow from '../../assets/icons/left-arrow-light.svg'
import axios from 'axios'
import NewClubInput from './NewClubInput'
import Slugify from '../../common/Slugify'
import Club from './Club.js'
import Team from './Team'
import ImageUploadInputs from './ImageUploadInputs'
import ImageUpload from '../../common/ImageUpload'

export default function NewClub({ onSubmit, onBackClick }) {
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
      location: {
        lat: '',
        lng: '',
      },
    },
    image: '',
    logo: '',
    mail: '',
    phoneNumber: '',
    websiteURL: '',
    teams: [{ teamName: '', league: '' }],
  })

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

  return (
    <NewClubForm onSubmit={handleSubmit}>
      <InputContainer>
        <h1>DEIN VEREIN</h1>

        <ImageUploadInputs
          newClub={newClub}
          loading={loading}
          uploadImg={uploadImg}
          onChange={event => ImageUpload(event, setLoading, onImageSave)}
        />
        <Club
          handleNameChange={handleNameChange}
          handleChange={handleChange}
          handleAddressChange={handleAddressChange}
          newClub={newClub}
        />
        <Team
          addTeam={addTeam}
          removeTeam={removeTeam}
          newClub={newClub}
          teamNameRef={teamNameRef}
          handleTeamChange={handleTeamChange}
        />
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

  function handleNameChange(event) {
    const clubName = event.target.value
    const name = event.target.name
    const slugedName = Slugify(event, clubName)
    setNewClub({ ...newClub, [name]: clubName, slug: slugedName })
  }

  function handleChange(event) {
    const name = event.target.name
    setNewClub({ ...newClub, [name]: event.target.value })
  }

  function addTeam() {
    setNewClub({ ...newClub, teams: [...newClub.teams, { ...blankTeam }] })
  }

  function removeTeam() {
    setNewClub({
      ...newClub,
      teams: newClub.teams.splice(0, newClub.teams.length - 1),
    })
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
  function geocode() {
    const MAPSKEY = process.env.REACT_APP_MAPS_KEY
    const location = `${newClub.address.street} ${newClub.address.houseNumber}, ${newClub.address.zip} ${newClub.address.city}`

    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: location,
          key: MAPSKEY,
        },
      })
      .then(function(response) {
        setNewClub({
          ...newClub,
          address: {
            ...newClub.address,
            location: response.data.results[0].geometry.location,
          },
        })
        onSubmit(newClub)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    geocode()
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
}

const NewClubForm = styled.form`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
  gap: 16px;
  padding: 10px 20px;
`

const InputContainer = styled.div`
  display: grid;
  gap: 10px;
  overflow: scroll;
  h1 {
    justify-self: center;
    margin: 0;
    color: var(--dark);
    font-size: 2.8rem;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0 10px;
`

const ButtonLabel = styled.label`
  border-radius: 16px;
  background: var(--dark);
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
