import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,
body {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100vw;
}

* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
}
`;
