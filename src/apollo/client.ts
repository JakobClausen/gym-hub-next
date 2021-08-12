import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getAccessToken } from '../utils/authUtils';
import { handleUnauthorisedError } from './errorhandlers';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
  credentials: 'include',
});

const cache = new InMemoryCache({});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors)
    for (const { message } of graphQLErrors) {
      switch (message) {
        case 'Unauthorised':
          handleUnauthorisedError(operation, forward);
          break;

        default:
          break;
      }
    }
});

const authLink = setContext(async (_, { headers }) => {
  const accessToken = getAccessToken();
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  };
});

const link = errorLink.concat(authLink.concat(httpLink));

const client = new ApolloClient({
  link,
  cache,
});

export default client;
