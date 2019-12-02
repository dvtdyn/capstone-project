import React from 'react'
import styled from 'styled-components/macro'
import Club from './Club'

export default function ClubList({ clubs }) {
  return (
    <Grid>
      {clubs
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ logo, name, websiteURL, _id, phoneNumber, mail, slug }) => (
          <Club
            key={_id}
            logo={logo}
            name={name}
            websiteURL={websiteURL}
            phoneNumber={phoneNumber}
            mail={mail}
            slug={slug}
          />
        ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  margin: 20px 15px;
  justify-content: center;
  gap: 20px;
`
