import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  user-select: none;
}

body {
  margin: 0;
}

#root {
  width: 100vw;
  max-width: 100%;
}



html {
  scroll-behavior: smooth;
  cursor: default;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`

export default GlobalStyle
