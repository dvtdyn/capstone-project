import React from 'react'
import styled from 'styled-components/macro'
import etvImage from './assets/images/ETV.jpg'
import ClubButton from './ClubButton'
export default function ClubOverview({
  logo,
  clubName,
  phoneNumber,
  phoneIcon,
  mail,
  mailIcon,
  websiteURL,
  websiteIcon,
  zip,
  street,
  houseNumber,
  city,
  teams,
}) {
  return (
    <ClubOverviewContainer>
      <ClubImage src={etvImage} />
      <ClubTextWrapper logo={logo}>
        <Wrapper>
          <h1>{clubName.toUpperCase()}</h1>
          <ButtonsWrapper>
            <ClubButton
              href={'tel:' + phoneNumber}
              src={phoneIcon}
              alt="Phone"
            />
            <ClubButton href={'mailto:' + mail} src={mailIcon} alt="Mail" />
            <ClubButton
              href={websiteURL}
              src={websiteIcon}
              alt="Website"
              target="_blank"
            />
          </ButtonsWrapper>
        </Wrapper>
        <Wrapper>
          <h2>Address</h2>
          <p>{`${street} ${houseNumber}, ${zip} ${city}`}</p>
        </Wrapper>
        <Wrapper>
          <h2>Teams</h2>
          {teams.map(({ name, league }) => (
            <>
              <h3>{name}</h3>
              <p>{league}</p>
            </>
          ))}
        </Wrapper>
      </ClubTextWrapper>
    </ClubOverviewContainer>
  )
}

const ClubOverviewContainer = styled.div`
  display: grid;
  grid-template-rows: 250px auto;

  background: #494e61;
`
const ClubTextWrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 90px 80px auto;
  &:after {
    content: '';
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
    opacity: 1;
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
