import React from 'react'
import styled from 'styled-components/macro'
import TeamInput from './TeamInput'
import Button from '../Button.js'
import add from '../../assets/icons/add-dark.svg'
import remove from '../../assets/icons/remove-dark.svg'

export default function Team({
  addTeam,
  removeTeam,
  newClub,
  teamNameRef,
  handleTeamChange,
}) {
  return (
    <div>
      <Title>Teams</Title>
      <Button name="Add" src={add} onClick={addTeam} />
      <Button name="Remove" src={remove} onClick={removeTeam} />
      {newClub.teams.map((val, index) => (
        <TeamInput
          key={`teamName${index}`}
          index={index}
          reference={newClub.teams.length - 1 === index ? teamNameRef : null}
          teams={newClub.teams}
          onChange={handleTeamChange}
        />
      ))}
    </div>
  )
}

const Title = styled.h2`
  font-size: 2.4rem;
  display: inline-block;
  color: var(--dark);
  margin: 0;
`
