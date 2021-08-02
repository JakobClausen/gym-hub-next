import { gql } from '@apollo/client';

export default gql`
  query getWorkout($type: String!, $day: Float!) {
    getWorkoutByDay(type: $type, day: $day) {
      type
      workoutSection {
        title
        body
        order
      }
    }
  }
`;
