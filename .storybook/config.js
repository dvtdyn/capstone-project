import React from 'react'
import styled from 'styled-components/macro'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import GlobalStyles from '../src/GlobalStyles'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)

addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <GlobalStyles />
    <Wrapper>{storyFn()}</Wrapper>
  </>
))

const Wrapper = styled.div`
  width: 375px;
  outline: 1px solid black;
  padding: 15px;
`
