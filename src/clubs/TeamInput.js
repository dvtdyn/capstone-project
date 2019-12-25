import React from 'react'
import styled from 'styled-components/macro'
import NewClubInput from './NewClubInput'
import PropTypes from 'prop-types'

export default function TeamInput({ index, reference, teams, onChange }) {
  const teamNameID = `teamName${index}`
  const leagueID = `league${index}`

  return (
    <TeamsContentWrapper key={`team${index}`}>
      <NewClubInput
        type="text"
        dataIndex={index}
        dataName="teamName"
        name={teamNameID}
        reference={reference}
        placeholder="Teamname"
        value={teams[index].teamName}
        onChange={onChange}
      />
      <NewClubInput
        type="text"
        dataIndex={index}
        dataName="league"
        name={leagueID}
        placeholder="Liga"
        value={teams[index].league}
        onChange={onChange}
      />
    </TeamsContentWrapper>
  )
}

TeamInput.propTypes = {
  index: PropTypes.number,
  teams: PropTypes.array,
  handleTeamChange: PropTypes.func,
}

const TeamsContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding-left: 8px;
  grid-template-columns: auto 120px;
`
