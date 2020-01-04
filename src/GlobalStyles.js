import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
  font-size: 62.5%;
  --dark: #494e61;
}
  *{
    box-sizing: border-box;
    font-family: "Helvetica Neue",sans-serif;
    font-weight: 300;
    scrollbar-width: none;
   }

  body{
    margin: 0;
    /* background: #20243c; */
    /* background: var(--dark); */
    height: 100vh;
    overflow:hidden;
  }

`
