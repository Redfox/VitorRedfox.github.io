import { createGlobalStyle } from 'styled-components';

import font from '../assets/fonts/SuperMario.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: SuperMario;
    src: url(${font});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body {
    overflow: hidden;
    display: flex;
  }
  html, body, #root {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    font-family: "Maison", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #faf8ff;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
