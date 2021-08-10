import { gql } from '@apollo/client';

export default gql`
  mutation CreateGymClass(
    $dayOfTheWeek: Float!
    $startTime: String!
    $endTime: String!
    $type: String!
  ) {
    createGymClass(
      createGymClass: {
        dayOfTheWeek: $dayOfTheWeek
        startTime: $startTime
        endTime: $endTime
        type: $type
      }
    )
  }
`;
