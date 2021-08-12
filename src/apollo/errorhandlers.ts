import { NextLink, Operation } from '@apollo/client';
import { setAccessToken, updateAccessToken } from '../utils/authUtils';

export const handleUnauthorisedError = async (
  operation: Operation,
  forward: NextLink
) => {
  try {
    const accessToken = await updateAccessToken();
    setAccessToken(accessToken);
    const oldHeaders = operation.getContext().headers;
    operation.setContext({
      headers: {
        ...oldHeaders,
        authorization: `Bearer ${accessToken}`,
      },
    });
    return forward(operation);
  } catch (err) {
    console.log('refresh err', err);
  }
};
