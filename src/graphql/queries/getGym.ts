import { gql } from '@apollo/client';

export default gql`
  query getGym {
    getGym {
      name
      logoUrl
    }
  }
`;
