import React from 'react'
import styled from 'styled-components/macro'
import NewPlayerInput from './NewPlayerInput.js'

export default function Player({ handleNameChange, handleChange, newPlayer }) {
  return (
    <PlayerContainer>
      <NewPlayerInput
        type="text"
        name="name"
        placeholder="Spielername"
        onChange={handleNameChange}
        value={newPlayer.name}
      />
      <NewPlayerInput
        type="text"
        name="phoneNumber"
        placeholder="Telefon"
        onChange={handleChange}
        value={newPlayer.phoneNumber}
      />
      <NewPlayerInput
        type="text"
        name="mail"
        placeholder="E-Mail"
        onChange={handleChange}
        value={newPlayer.mail}
      />
      <NewPlayerInput
        type="text"
        name="instagram"
        placeholder="Instagram"
        onChange={handleChange}
        value={newPlayer.instagram}
      />
      <NewPlayerInput
        type="text"
        name="facebook"
        placeholder="Facebook"
        onChange={handleChange}
        value={newPlayer.facebook}
      />
    </PlayerContainer>
  )
}

const PlayerContainer = styled.div`
  display: grid;
  gap: 12px;
  align-content: flex-start;
`
