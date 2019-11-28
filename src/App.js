import React from 'react'
import Club from './Club'
import clubs from './clubs'
import styled from 'styled-components/macro'
import GlobalStyles from './GlobalStyles'
console.log(
  clubs.sort(function(a, b) {
    return a.value > b.value
  })
)
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Grid>
        {clubs
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ logo, name, websiteURL, _id, phoneNumber, mail }) => (
            <Club
              key={_id}
              logo={logo}
              clubName={name}
              websiteURL={websiteURL}
              phoneNumber={phoneNumber}
              mail={mail}
            />
          ))}
      </Grid>
    </>
  )
}

const Grid = styled.section`
  display: grid;
  margin: 20px 15px;
  justify-content: center;
  gap: 20px;
`
