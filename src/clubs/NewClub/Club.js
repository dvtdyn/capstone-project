import React from 'react'
import styled from 'styled-components/macro'
import NewClubInput from './NewClubInput'

export default function Club({
  handleNameChange,
  handleChange,
  handleAddressChange,
  newClub,
}) {
  return (
    <ClubContainer>
      <Title>Verein</Title>
      <NewClubInput
        type="text"
        name="name"
        placeholder="Vereinsname"
        onChange={handleNameChange}
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
    </ClubContainer>
  )
}

const ClubContainer = styled.div`
  display: grid;
  gap: 12px;
`

const Title = styled.h2`
  font-size: 2.4rem;
  display: inline-block;
  color: var(--dark);
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
