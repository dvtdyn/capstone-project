import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import React from 'react'
import styled from 'styled-components/macro'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)

addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div`
  max-width: 500px;
  border: 1px solid black;
  padding: 20px;
`
