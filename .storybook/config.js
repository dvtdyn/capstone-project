import React from 'react'
import styled from 'styled-components/macro'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import GlobalStyles from '../src/GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)

addDecorator(withInfo)
addDecorator(storyFn => (
  <>
    <Router>
      <GlobalStyles />
      <Wrapper>{storyFn()}</Wrapper>
    </Router>
  </>
))

const Wrapper = styled.div`
  width: 375px;
  height: 667px;
  outline: 1px solid black;
`
