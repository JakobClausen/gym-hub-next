import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apollo/client";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThemeProvider } from "styled-components";
import { RefreshHOC } from "../components/auth/RefreshHOC";
import { GlobalStyle } from "../styles/globals";
import Theme from "../styles/theme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RefreshHOC>
          <Component {...pageProps} />
        </RefreshHOC>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
