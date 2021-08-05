import { gql } from '@apollo/client';

export default gql`
  query getUser {
    getUser {
      firstName
    }
  }
`;
