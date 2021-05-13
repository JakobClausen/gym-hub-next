import { NextLink, Operation } from "@apollo/client";
import { updateAccessToken, setAccessToken } from "../utils/accessToken";

export const handleUnauthorisedError = (
  operation: Operation,
  forward: NextLink
) => {
  updateAccessToken()
    .then((accessToken) => {
      setAccessToken(accessToken);
      const oldHeaders = operation.getContext().headers;
      operation.setContext({
        headers: {
          ...oldHeaders,
          authorization: `Bearer ${accessToken}`,
        },
      });
      return forward(operation);
    })
    .catch((err) => {
      console.log("refresh err", err);
      // Bad Token - logout
    });
};
