import React from 'react'
import styled from 'styled-components/macro'

export default function Club({ logo, clubName, websiteURL, websiteName }) {
  return (
    <ClubBody>
      <ImageWrapper>
        <Logo src={logo} />
      </ImageWrapper>
      <ClubTextWrapper>
        <ClubName>{clubName.toUpperCase()}</ClubName>
        <Website href={websiteURL} target="_blank">
          {websiteName}
        </Website>
      </ClubTextWrapper>
    </ClubBody>
  )
}

const ClubBody = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 60px auto;
  align-items: center;
  padding: 8px 10px;
  border-radius: 8px;
  background-color: #494e61;
`

const ImageWrapper = styled.div`
  height: 60px;
  width: 60px;
  text-align: center;
`

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
`

const ClubTextWrapper = styled.div`
  height: 60px;
  display: grid;
  gap: 10px;
  align-items: baseline;
  padding: 0 0 0 10px;
`

const ClubName = styled.p`
  margin: 0;
  font-weight: 300;
  color: #fff;
  font-size: 21px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Website = styled.a`
  font-weight: 300;
  font-size: 21px;
  color: #888892;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
