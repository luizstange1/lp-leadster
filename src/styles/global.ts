import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   background-color: ${(props) => props.theme.colors.backgroundColor};
   font-family: 'Plus Jakarta Sans', sans-serif;
   -webkit-font-smoothing: antialiased;
  }

  ul, li, a {
    text-decoration: none;
    list-style: none;
  }
`;
