import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import phoneIcon from './assets/icons/phone.svg'
import ClubButton from './ClubButton'

export default {
  component: ClubButton,
  title: 'ClubButton',
  decorators: [withKnobs],
}

export const clubButton = () => (
  <ClubButton
    href={text('tel:0049404017690')}
    src={phoneIcon}
    alt={text('Phone')}
  />
)
