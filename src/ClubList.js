import React from 'react'

import styled from 'styled-components/macro'
import Club from './Club'
import { Link } from 'react-router-dom'
import add from './assets/icons/add.svg'

export default function ClubList({ clubs }) {
  return (
    <Grid>
      <ButtonAddWrapper to="/club/add-new-club">
        <img src={add} alt="" />
      </ButtonAddWrapper>
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
  margin: 20px 0;
  gap: 16px;
`
const ButtonAddWrapper = styled(Link)`
  margin: 0;
  justify-self: end;
  padding-right: 10px;
  img {
    height: 40px;
  }
`
