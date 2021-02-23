import { createGlobalStyle } from "styled-components";

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
    display: flex;
    justify-content: center;
  }

  html {
    scroll-behavior: smooth;
    background: ${({ theme }) => {
      return "#f7f5f9";
    }};
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;

export default GlobalStyle;
