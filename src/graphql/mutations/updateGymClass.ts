import { gql } from '@apollo/client';

export default gql`
  mutation UpdateGymClass(
    $id: Int!
    $startTime: String
    $endTime: String
    $type: String
  ) {
    updateGymClass(
      id: $id
      updateGymClass: {
        startTime: $startTime
        endTime: $startTime
        type: $type
      }
    )
  }
`;
