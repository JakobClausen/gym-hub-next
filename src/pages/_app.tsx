import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apollo/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { RefreshHOC } from "../components/auth/RefreshHOC";
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
    font-family: 'Open Sans', sans-serif;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RefreshHOC>
          <Component {...pageProps} />
        </RefreshHOC>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
