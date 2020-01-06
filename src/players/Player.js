import React from 'react'
import styled from 'styled-components/macro'
import insta from '../assets/icons/insta.svg'
import facebook from '../assets/icons/facebook.svg'
import phoneIcon from '../assets/icons/phone_dark.svg'
import mailIcon from '../assets/icons/mail_dark.svg'
import ClubButton from '../clubs/ClubButton'
import { Link } from 'react-router-dom'

export default function Club({
  logo,
  name,
  websiteURL,
  phoneNumber,
  mail,
  slug,
}) {
  const clubUrl = `/club/${slug}`

  return (
    <ClubBody>
      <LinkWrapper to={clubUrl}>
        <Logo src={logo} />
      </LinkWrapper>
      <ClubTextWrapper>
        <ClubName to={clubUrl}>{name.toUpperCase()}</ClubName>
        <ButtonsWrapper>
          <ClubButton href={'tel:' + phoneNumber} src={phoneIcon} alt="Phone" />
          <ClubButton href={'mailto:' + mail} src={mailIcon} alt="Mail" />
          <ClubButton
            style={{ padding: '10px' }}
            href={websiteURL}
            src={insta}
            alt="Website"
            target="_blank"
          />
          <ClubButton
            style={{ padding: '10px' }}
            href={websiteURL}
            src={facebook}
            alt="Website"
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
const LinkWrapper = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  margin: 10px 0 10px 10px;
  text-align: center;
  overflow: hidden;
  cursor: default;
`

const Logo = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`

const ClubTextWrapper = styled.div`
  height: 100px;
  display: grid;
  padding-left: 5px;
`

const ClubName = styled(Link)`
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
