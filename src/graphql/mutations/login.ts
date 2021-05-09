import { gql } from "@apollo/client";

export default gql`
  mutation login($email: String!, $password: String!) {
    loginUser(loginInput: { email: $email, password: $password }) {
      accessToken
    }
  }
`;
