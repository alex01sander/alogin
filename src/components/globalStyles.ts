import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2, h3, h4 {
    font-family: "Lora", serif;
  }

  p {
    font-family: "Alice", serif;
  }

  a{
    font-family: "Alice", serif;
  }
`;
