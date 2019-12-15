import React from 'react'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Upload from './Upload'

export default {
  component: Upload,
  title: 'Upload',
  decorators: [withKnobs],
}

export const upload = () => {
  return <Upload />
}
