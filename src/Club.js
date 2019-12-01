import React from 'react'
import styled from 'styled-components/macro'
import websiteIcon from './assets/icons/website.svg'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'
import ClubButton from './ClubButton'
import { Link } from 'react-router-dom'

export default function Club({
  logo,
  clubName,
  websiteURL,
  phoneNumber,
  mail,
}) {
  return (
    <ClubBody>
      <LinkWrapper to={`/${clubName}`}>
        <Logo src={logo} />
      </LinkWrapper>
      <ClubTextWrapper>
        <ClubName to={`/${clubName}`}>{clubName.toUpperCase()}</ClubName>
        <ButtonsWrapper>
          <ClubButton href={'tel:' + phoneNumber} src={phoneIcon} alt="Phone" />
          <ClubButton href={'mailto:' + mail} src={mailIcon} alt="Mail" />
          <ClubButton
            href={websiteURL}
            src={websiteIcon}
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
  grid-template-columns: 85px auto;
  align-content: center;
  border-radius: 8px;
  background-color: #494e61;
  text-decoration: none;
`
const LinkWrapper = styled(Link)`
  width: 85px;
  padding: 10px 0 10px 10px;
  text-align: center;
`

const Logo = styled.img`
  max-height: 75px;
  max-width: 75px;
`

const ClubTextWrapper = styled.div`
  height: 100px;
  display: grid;
`

const ClubName = styled(Link)`
  margin: 0;
  font-weight: 300;
  color: #fff;
  font-size: 2.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 10px 5px 0 10px;
  text-decoration: none;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 5px;
`
