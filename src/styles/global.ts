import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-blue: #0062FF;
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-background: #252525;
    --color-gray: #989898;
    --color-light-gray: #F6F6F6;
    --color-red: #af0404;
    --font-family-title: 'Montserrat', sans-serif;
    --font-size-title: 32px;
    --font-size-subtitle: 22px;
    --font-size-text: 16px;
    --font-size-smallest: 12px;
    --border-radius: 10px;
    --header-height: 80px;
    --margin-same-content: 20px;
    --margin-distinct-content: 50px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family-title);
    outline: none;
  }

  body {
    background: var(--color-background);
  }

  a {
    color: var(--color-gray);
    cursor: pointer;
    text-decoration: none;
  }

  .container {
    padding: 0 5%;
  }
`
