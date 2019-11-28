import React from 'react'
import styled from 'styled-components/macro'
import websiteIcon from './assets/icons/website.svg'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'
import ClubButton from './ClubButton'

export default function Club({
  logo,
  clubName,
  websiteURL,
  phoneNumber,
  mail,
}) {
  return (
    <ClubBody>
      <Logo src={logo} />
      <ClubTextWrapper>
        <ClubName>{clubName.toUpperCase()}</ClubName>
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
  grid-template-columns: 75px auto;
  padding: 10px 5px 10px 10px;
  border-radius: 8px;
  background-color: #494e61;
`

const Logo = styled.img`
  max-height: 75px;
  max-width: 75px;
  margin: 0 auto;
`

const ClubTextWrapper = styled.div`
  height: 90px;
  display: grid;
  gap: 10px;
  padding-left: 10px;
`

const ClubName = styled.p`
  margin: 0;
  font-weight: 300;
  color: #fff;
  font-size: 2.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
