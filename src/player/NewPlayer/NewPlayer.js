import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import uploadImg from '../../assets/icons/cloud-computing-dark.svg'
import rightArrow from '../../assets/icons/right-arrow-light.svg'
import leftArrow from '../../assets/icons/left-arrow-light.svg'
import NewPlayerInput from './NewPlayerInput'
import Slugify from '../../common/Slugify'
import Player from './Player.js'
import ImageUploadInputs from './ImageUploadInputs'
import ImageUpload from '../../common/ImageUpload'
import { useHistory } from 'react-router-dom'

export default function NewPlayer({ onSubmit, onBackClick }) {
  const history = useHistory()

  const [loading, setLoading] = useState({
    profileImageLoading: false,
  })

  const [newPlayer, setNewPlayer] = useState({
    name: '',
    slug: '',
    profileImage: '',
    mail: '',
    phoneNumber: '',
    instagram: '',
    facebook: '',
  })

  useEffect(() => {
    const newPlayerData = JSON.parse(localStorage.getItem('newPlayer'))
    if (newPlayerData) {
      setNewPlayer({ ...newPlayerData })
    } else {
      setNewPlayer(newPlayer => newPlayer)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('newPlayer', JSON.stringify(newPlayer))
  }, [newPlayer])

  return (
    <NewPlayerForm onSubmit={handleSubmit}>
      <InputContainer>
        <h1>DEIN PROFIL</h1>

        <ImageUploadInputs
          newPlayer={newPlayer}
          loading={loading}
          uploadImg={uploadImg}
          onChange={event => ImageUpload(event, setLoading, onImageSave)}
        />
        <Player
          handleNameChange={handleNameChange}
          handleChange={handleChange}
          newPlayer={newPlayer}
        />
      </InputContainer>
      <ButtonsWrapper>
        <ButtonLabel htmlFor="buttonBack" onClick={onBackClick}>
          <img src={leftArrow} alt="" />
        </ButtonLabel>
        <NewPlayerInput id="buttonBack" type="button" />
        <ButtonLabel htmlFor="submit">
          <img src={rightArrow} alt="" />
        </ButtonLabel>
        <NewPlayerInput id="submit" type="submit" />
      </ButtonsWrapper>
    </NewPlayerForm>
  )

  function handleNameChange(event) {
    const playerName = event.target.value
    const name = event.target.name
    const slugedName = Slugify(event, playerName)
    setNewPlayer({ ...newPlayer, [name]: playerName, slug: slugedName })
  }

  function handleChange(event) {
    const name = event.target.name
    setNewPlayer({ ...newPlayer, [name]: event.target.value })
  }

  function onImageSave(response, name) {
    if (name === 'profileImage') {
      setNewPlayer({ ...newPlayer, profileImage: response.data.secure_url })
      setLoading({ profileImageLoading: false })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(newPlayer)
    history.push('/player')
  }
}

const NewPlayerForm = styled.form`
  display: grid;
  grid-template-rows: auto 60px;
  height: 100vh;
  gap: 16px;
  padding: 10px 20px;
`

const InputContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 24px;
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
