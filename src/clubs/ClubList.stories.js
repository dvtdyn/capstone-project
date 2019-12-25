import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'

import ClubList from './ClubList.js'
import websiteIcon from './assets/icons/website.svg'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'
import clubs from './clubs'

export default {
  component: ClubList,
  title: 'ClubList',
}

export const clubList = () => {
  return (
    <ClubList
      clubs={clubs}
      phoneIcon={phoneIcon}
      mailIcon={mailIcon}
      websiteIcon={websiteIcon}
    />
  )
}
