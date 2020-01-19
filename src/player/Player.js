import React from 'react'
import styled from 'styled-components/macro'
import instaLogo from '../assets/icons/insta.svg'
import facebookLogo from '../assets/icons/facebook.svg'
import phoneIcon from '../assets/icons/phone_dark.svg'
import mailIcon from '../assets/icons/mail_dark.svg'
import PlayerButton from './PlayerButton.js'

export default function Club({
  profileImage,
  name,
  instagram,
  phoneNumber,
  mail,
  facebook,
}) {
  return (
    <ClubBody>
      <ImageWrapper>
        <ProfileImage src={profileImage} />
      </ImageWrapper>
      <ClubTextWrapper>
        <PlayerName>{name.toUpperCase()}</PlayerName>
        <ButtonsWrapper>
          <PlayerButton
            href={'tel:' + phoneNumber}
            src={phoneIcon}
            alt="Phone"
          />
          <PlayerButton href={'mailto:' + mail} src={mailIcon} alt="Mail" />
          <PlayerButton
            style={{ padding: '10px' }}
            href={instagram}
            src={instaLogo}
            alt="Website"
            target="_blank"
          />
          <PlayerButton
            style={{ padding: '10px' }}
            href={facebook}
            src={facebookLogo}
            alt="Facebook"
            target="_blank"
          />
        </ButtonsWrapper>
      </ClubTextWrapper>
    </ClubBody>
  )
}

const ClubBody = styled.section`
  display: grid;
  grid-auto-flow: column;
  height: 100px;
  grid-template-columns: auto 1fr;
  align-content: center;
  text-decoration: none;
`
const ImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin: 10px 0 10px 10px;
  text-align: center;
  overflow: hidden;
  cursor: default;
`

const ProfileImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const ClubTextWrapper = styled.div`
  height: 100px;
  display: grid;
  padding-left: 5px;
`

const PlayerName = styled.div`
  margin: 0;
  font-weight: 300;
  color: #494e61;
  font-size: 2.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 5px 0 10px;
  text-decoration: none;
  cursor: default;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
  border-bottom: 1px solid #bdc2d5;
`
