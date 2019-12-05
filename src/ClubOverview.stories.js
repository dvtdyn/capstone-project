import React from 'react'
import { MemoryRouter, Route } from 'react-router-dom'

import ClubOverview from './ClubOverview'
import websiteIcon from './assets/icons/website.svg'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'
import clubs from './clubs'

export default {
  component: ClubOverview,
  title: 'ClubOverview',
}

export const clubOverview = () => {
  return (
    <MemoryRouter initialEntries={[{ pathname: '/club/fc-alsterbrueder' }]}>
      <Route path="/club/:slug">
        <ClubOverview
          clubs={clubs}
          phoneIcon={phoneIcon}
          mailIcon={mailIcon}
          websiteIcon={websiteIcon}
        />
      </Route>
    </MemoryRouter>
  )
}
