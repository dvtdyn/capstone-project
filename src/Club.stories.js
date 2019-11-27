import React from 'react'
import Club from './Club.js'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

export default {
  component: Club,
  title: 'Club',
  decorators: [withKnobs],
}

export const club = () => (
  <Club
    logo={text(
      'Logo',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eimsb%C3%BCttelerTV.svg/800px-Eimsb%C3%BCttelerTV.svg.png'
    )}
    clubName={text('Clubname', 'Eimsbütteler TV AAAAAAAAAAAAA')}
    websiteURL={text('URL', 'https://etv-hamburg.de/')}
    websiteName={text('WebsiteName', 'etv-hamburg.de AAAAAAAAAAAAA')}
  />
)
