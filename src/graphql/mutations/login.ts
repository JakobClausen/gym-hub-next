import { gql } from "@apollo/client";

export default gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
