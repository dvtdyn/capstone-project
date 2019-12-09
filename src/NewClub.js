import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import uploadImg from './assets/icons/cloud-computing.svg'
import Button from './Button.js'
import add from './assets/icons/add.svg'
import remove from './assets/icons/remove.svg'

export default function NewClub() {
  const blankTeam = { teamName: '', league: '' }
  const [teams, setTeamsState] = useState([{ ...blankTeam }])
  const teamNameRef = useRef()

  const addTeam = () => {
    setTeamsState([...teams, { ...blankTeam }])
  }

  const removeTeam = () => {
    setTeamsState(teams.splice(0, teams.length - 1))
  }

  useEffect(() => {
    if (teams.length > 1) {
      teamNameRef.current && teamNameRef.current.focus()
    }
  }, [teams])
  return (
    <NewClubForm>
      <h1>DEIN VEREIN !</h1>
      <UploadWrapper>
        <ImgLabel htmlFor="clubimage">
          <UploadHeader>Vereinsfoto</UploadHeader>
          <img src={uploadImg} alt="" />
        </ImgLabel>
        <NewClubInput
          type="file"
          id="clubimage"
          accept="image/*"
          name="clubImage"
        />
        <LogoLabel htmlFor="logo">
          <UploadHeader>Logo</UploadHeader>
          <img src={uploadImg} alt="" />
        </LogoLabel>
        <NewClubInput type="file" id="logo" accept="image/*" name="logo" />
      </UploadWrapper>
      <div>
        <FormHeader>Verein</FormHeader>
        <ClubWrapper>
          <NewClubInput type="text" name="clubName" placeholder="Vereinsname" />
          <NewClubInput type="text" name="phone" placeholder="Telefon" />
          <NewClubInput type="text" name="mail" placeholder="E-Mail" />
          <NewClubInput type="text" name="website" placeholder="Website" />
          <StreetNrWrapper>
            <NewClubInput type="text" name="street" placeholder="Straße" />
            <NewClubInput type="text" name="houseNumber" placeholder="Nr." />
          </StreetNrWrapper>
          <ZipCityWrapper>
            <NewClubInput type="text" name="zip" placeholder="PLZ" />
            <NewClubInput type="text" name="city" placeholder="Stadt" />
          </ZipCityWrapper>
        </ClubWrapper>
      </div>
      <div>
        <FormHeader>Teams</FormHeader>
        <Button type="Add" src={add} onClick={addTeam} />
        <Button type="Remove" src={remove} onClick={removeTeam} />
        {teams.map((val, index) => {
          const teamNameID = `teamName${index}`
          const leagueID = `league${index}`
          return (
            <TeamsContentWrapper key={teamNameID}>
              <NewClubInput
                type="text"
                name={teamNameID}
                ref={teams.length - 1 === index ? teamNameRef : null}
                placeholder="Teamname"
              />
              <NewClubInput type="text" name={leagueID} placeholder="Liga" />
            </TeamsContentWrapper>
          )
        })}
      </div>
      <div>
        <NewClubInput type="submit" value="Submit" />
      </div>
    </NewClubForm>
  )
}

const NewClubForm = styled.form`
  display: grid;
  gap: 10px;
  padding: 20px;
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
  grid-template-columns: 110px auto;
  grid-template-rows: 80px;
`
const ImgLabel = styled.label`
  display: grid;
  grid-template-rows: 30px auto;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  height: 100%;
  padding: 15px;
  border-radius: 20px;

  img {
    height: 80%;
  }
`
const LogoLabel = styled.label`
  display: grid;
  grid-template-rows: 30px auto;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background-color: white;
  height: 80px;
  width: 80px;
  padding: 15px;
  border-radius: 20px;

  img {
    height: 80%;
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

const TeamsContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding-left: 8px;
  grid-template-columns: auto 120px;
`
const NewClubInput = styled.input`
  background-color: transparent;
  color: white;
  padding: 8px 8px 8px 0;
  font-size: 1.6rem;
  height: 40px;
  outline: none;
  display: block;
  border: none;
  border-bottom: 1px solid white;
  &[type='file'] {
    display: none;
  }

  &[type='submit'] {
    display: block;
    border: 1px solid white;
    border-radius: 12px;
    margin: 0 auto;
    margin-top: 8px;
    padding: 8px 20px;
    font-size: 2.4rem;
    height: 100%;
  }

  &::placeholder {
    font-size: 1.2rem;
    color: white;
  }

  &:focus {
    border-color: lightsalmon;
  }
`
