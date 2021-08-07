import { ApolloProvider } from '@apollo/client';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import type { AppProps } from 'next/app';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'semantic-ui-css/semantic.min.css';
import { ThemeProvider } from 'styled-components';
import client from '../apollo/client';
import { RefreshHOC } from '../components/auth/RefreshHOC';
import { AppState } from '../context/state';
import { GlobalStyle } from '../styles/globals';
import Theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
  dayjs.extend(customParseFormat);
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <RefreshHOC>
          <Toaster />
          <AppState>
            <Component {...pageProps} />
          </AppState>
        </RefreshHOC>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
