import { gql } from '@apollo/client';

export default gql`
  mutation DeleteGymClass($id: Float!) {
    deleteGymClass(id: $id)
  }
`;
