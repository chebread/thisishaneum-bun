import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  // #0077ee #ff880f #07ee00
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    overflow-x: hidden;
    box-sizing: border-box;
  }
  html, body, #root {
    position: relative;
    height: 100%;
    background-color: rgb(10, 10, 10);
    color: #fff;
    cursor: text;
  }
  ::selection {
    background-color: #00ee00;
    color: #000;
  }
`;

export default GlobalStyles;
