import React from 'react'
import styled from 'styled-components/macro'
import etvImage from './assets/images/ETV.jpg'
import ClubButton from './ClubButton'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'
import websiteIcon from './assets/icons/website.svg'
import { useParams } from 'react-router-dom'

export default function ClubOverview({ clubs }) {
  const { slug } = useParams()
  const club = getClubFromSlug(slug)
  return (
    <ClubOverviewContainer>
      <ClubImage src={etvImage} />
      <ClubTextWrapper logo={club.logo}>
        <Wrapper>
          <h1>{club.name && club.name.toUpperCase()}</h1>
          <ButtonsWrapper>
            <ClubButton
              href={'tel:' + club.phoneNumber}
              src={phoneIcon}
              alt="Phone"
            />
            <ClubButton
              href={'mailto:' + club.mail}
              src={mailIcon}
              alt="Mail"
            />
            <ClubButton
              href={club.websiteURL}
              src={websiteIcon}
              alt="Website"
              target="_blank"
            />
          </ButtonsWrapper>
        </Wrapper>
        <Wrapper>
          <h2>Address</h2>
          <p>
            {club.address &&
              `${club.address.street} ${club.address.houseNumber}, ${club.address.zip} ${club.address.city}`}
          </p>
        </Wrapper>
        <Wrapper>
          <h2>Teams</h2>
          {club.teams &&
            club.teams.map(({ name, league }) => (
              <>
                <h3>{name}</h3>
                <p>{league}</p>
              </>
            ))}
        </Wrapper>
      </ClubTextWrapper>
    </ClubOverviewContainer>
  )

  function getClubFromSlug(slug) {
    return clubs.find(club => club.slug.toLowerCase() === slug)
  }
}

const ClubOverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 250px auto;
  height: 100vh;
  background: #494e61;
`
const ClubTextWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 90px 80px auto;

  &:after {
    content: '';
    justify-self: center;
    max-height: 397px;
    max-width: 345px;
    top: 10px;
    height: 100%;
    width: 100%;
    position: absolute;
    background: url(${props => props.logo}) no-repeat center center;
    opacity: 0.05;
    background-size: contain;
  }
`

const ClubImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
const Wrapper = styled.section`
  display: grid;
  align-content: flex-start;
  padding: 10px 10px 0 10px;
  border-bottom: solid 1px #31354b;

  h1 {
    margin: 0;
    font-weight: 300;
    color: #fff;
    font-size: 2.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  h2 {
    font-size: 2.4rem;
    color: #fff;
    font-weight: 300;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  h3 {
    font-size: 2.1rem;
    color: #fff;
    font-weight: 300;
    margin: 0;
    padding: 10px 10px 0 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    & + p {
      color: #fff;
      font-weight: 300;
      margin: 0;
      padding: 0 10px 0 20px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  p {
    font-size: 2rem;
    color: #fff;
    font-weight: 300;
    margin: 0;
    padding: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
