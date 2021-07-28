import { gql } from '@apollo/client';

export default gql`
  query getGymClasses($day: Float!) {
    classes(day: $day) {
      name
      startTime
      endTime
    }
  }
`;
