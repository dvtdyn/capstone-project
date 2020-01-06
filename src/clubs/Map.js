import React, { useState } from 'react'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import soccerIcon from '../assets/icons/soccerIcon.svg'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Map({ clubs }) {
  const [selectedClub, setSelectedClub] = useState(null)
  const defaultMapOptions = {
    mapTypeControl: false,
    draggable: true,
  }

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{
        lat:
          window.location.pathname === '/clubs/map'
            ? 53.553548
            : clubs[0].address.location.lat,
        lng:
          window.location.pathname === '/clubs/map'
            ? 9.993026
            : clubs[0].address.location.lng,
      }}
      onClick={() => setSelectedClub(null)}
      defaultOptions={defaultMapOptions}
    >
      {clubs.map(club => (
        <Marker
          key={club._id}
          position={{
            lat: club.address.location.lat,
            lng: club.address.location.lng,
          }}
          onClick={() => {
            setSelectedClub(club)
          }}
          icon={{
            url: soccerIcon,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}
      {selectedClub && (
        <InfoWindow
          position={{
            lat: selectedClub.address.location.lat + 0.006,
            lng: selectedClub.address.location.lng,
          }}
          onCloseClick={() => setSelectedClub(null)}
        >
          <Columns to={`/club/${selectedClub.slug}`}>
            <LogoWrapper>
              <Logo src={selectedClub.logo} />
            </LogoWrapper>
            <div></div>
            <Grid>
              <ClubName>{selectedClub.name}</ClubName>
              <Address>{`${selectedClub.address.street} ${selectedClub.address.houseNumber}`}</Address>
              <Address>{`${selectedClub.address.zip} ${selectedClub.address.city}`}</Address>
            </Grid>
          </Columns>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

const Columns = styled(Link)`
  display: grid;
  grid-auto-columns: columns;
  grid-template-columns: 75px 5px auto;
  text-decoration: none;
`
const LogoWrapper = styled.div`
  width: 75px;
  padding: 10px 0;
  text-align: center;
  cursor: default;
`
const Logo = styled.img`
  max-height: 65px;
  max-width: 65px;
`
const Grid = styled.div`
  display: grid;
  height: 90px;
  grid-template-rows: 28px 16px 16px;
  padding-top: 10px;
`
const ClubName = styled.h2`
  margin: 0;
  font-weight: 300;
  color: #494e61;
  font-size: 1.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 10px;
  text-decoration: none;
  cursor: default;
`
const Address = styled.p`
  padding: 0;
  padding-right: 10px;

  margin: 0;
  font-weight: 300;
  color: #494e61;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: default;
`
