import React from 'react'
import { text, boolean, withKnobs, number } from '@storybook/addon-knobs'
import ClubOverview from './ClubOverview'
import websiteIcon from './assets/icons/website.svg'
import phoneIcon from './assets/icons/phone.svg'
import mailIcon from './assets/icons/mail.svg'

export default {
  component: ClubOverview,
  title: 'ClubOverview',
  decorators: [withKnobs],
}

export const clubOverview = () => {
  return (
    <ClubOverview
      logo={text(
        'Logo',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eimsb%C3%BCttelerTV.svg/800px-Eimsb%C3%BCttelerTV.svg.png'
      )}
      clubName={text('Clubname', 'Eimsbütteler TV')}
      phoneNumber={text('Phonenumber', '2134235235235235')}
      phoneIcon={phoneIcon}
      mail={text('Mail', 'abscshdjkfhe@gmail.com')}
      mailIcon={mailIcon}
      websiteURL={'www.google.com'}
      websiteIcon={websiteIcon}
      zip="20144"
      street="Bundesstraße"
      houseNumber="96"
      city="Hamburg"
      teams={[
        {
          name: 'Eimsbüttel 1',
          league: 'Landesliga',
        },
        {
          name: 'Eimsbüttel 2',
          league: 'Kreisliga',
        },
        {
          name: 'Eimsbüttel 3',
          league: 'Kreisliga',
        },
        {
          name: 'Eimsbüttel 4',
          league: 'Kreisklasse',
        },
      ]}
    />
  )
}
