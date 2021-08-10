import { gql } from '@apollo/client';

export default gql`
  mutation UpdateGymClass(
    $id: Float!
    $startTime: String
    $endTime: String
    $type: String
  ) {
    updateGymClass(
      id: $id
      updateGymClass: { startTime: $startTime, endTime: $endTime, type: $type }
    ) {
      id
      type
      startTime
      endTime
    }
  }
`;
