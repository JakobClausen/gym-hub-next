import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  getAccessToken,
  updateAccessToken,
  setAccessToken,
} from "../utils/accessToken";
import { onError } from "@apollo/client/link/error";
import { handleUnauthorisedError } from "./errorhandlers";

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors)
    for (const { message } of graphQLErrors) {
      switch (message) {
        case "Unauthorised":
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
  cache: new InMemoryCache(),
});

export default client;
