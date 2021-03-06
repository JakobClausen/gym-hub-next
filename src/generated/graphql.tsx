import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddGymClass = {
  type?: Maybe<Scalars['String']>;
  dayOfTheWeek: Scalars['Float'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
};


export type Gym = {
  __typename?: 'Gym';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  logoUrl: Scalars['String'];
  user: Array<User>;
  gymClass: Array<GymClass>;
  workout: Array<Workout>;
  workoutExternalApi: WorkoutExternalApi;
};

export type GymClass = {
  __typename?: 'GymClass';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: Scalars['String'];
  dayOfTheWeek: Scalars['Float'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  gym: Gym;
  gymId: Scalars['Float'];
};

export type Login = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  updateGymClass: GymClass;
  createGymClass: Scalars['Boolean'];
  deleteGymClass: Scalars['Boolean'];
  registerGym: Gym;
  registerUser: User;
  loginUser: LoginResponse;
  logout: Scalars['Boolean'];
  createWorkoutExternalApi: WorkoutExternalApi;
  createWorkout: Workout;
  createWorkoutSection: WorkoutSection;
};


export type MutationUpdateGymClassArgs = {
  updateGymClass: UpdateGymClass;
  id: Scalars['Float'];
};


export type MutationCreateGymClassArgs = {
  createGymClass: AddGymClass;
};


export type MutationDeleteGymClassArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterGymArgs = {
  registerGym: RegisterGym;
};


export type MutationRegisterUserArgs = {
  registerUser: Register;
};


export type MutationLoginUserArgs = {
  loginInput: Login;
};


export type MutationCreateWorkoutExternalApiArgs = {
  workoutExternalApiInput: WorkoutExternalApiInput;
};


export type MutationCreateWorkoutArgs = {
  workoutIntput: WorkoutInput;
};


export type MutationCreateWorkoutSectionArgs = {
  workoutSectionIntput: WorkoutSectionInput;
};

export type Query = {
  __typename?: 'Query';
  classes: Array<GymClass>;
  getGym: Gym;
  getUser: User;
  getWorkoutExternalApi: WorkoutExternalApi;
  getWorkoutByDay: Workout;
  getWorkoutSection: WorkoutSection;
};


export type QueryClassesArgs = {
  day: Scalars['Float'];
};


export type QueryGetWorkoutByDayArgs = {
  type: Scalars['String'];
  day: Scalars['Float'];
};


export type QueryGetWorkoutSectionArgs = {
  id: Scalars['Float'];
};

export type Register = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  gymId: Scalars['Float'];
};

export type RegisterGym = {
  name: Scalars['String'];
};

export type UpdateGymClass = {
  type?: Maybe<Scalars['String']>;
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  tokenVersion: Scalars['Float'];
  gym: Gym;
  gymId: Scalars['Float'];
};

export type Workout = {
  __typename?: 'Workout';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  type: Scalars['String'];
  externalApiProvider?: Maybe<Scalars['String']>;
  dayOfTheWeek: Scalars['Float'];
  gymId: Scalars['Float'];
  gym: Gym;
  workoutSection?: Maybe<Array<WorkoutSection>>;
};

export type WorkoutExternalApi = {
  __typename?: 'WorkoutExternalApi';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  token: Scalars['String'];
  endpoint: Scalars['String'];
  type: Scalars['String'];
  gymId: Scalars['Float'];
  gym: Gym;
};

export type WorkoutExternalApiInput = {
  token: Scalars['String'];
  endpoint: Scalars['String'];
  type: Scalars['String'];
};

export type WorkoutInput = {
  type?: Maybe<Scalars['String']>;
  externalApiProvider?: Maybe<Scalars['String']>;
  dayOfTheWeek: Scalars['Float'];
};

export type WorkoutSection = {
  __typename?: 'WorkoutSection';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  order: Scalars['Float'];
  workoutId: Scalars['Float'];
  workout: Workout;
};

export type WorkoutSectionInput = {
  title: Scalars['String'];
  body: Scalars['String'];
  order: Scalars['Float'];
  workoutId: Scalars['Float'];
};

export type CreateGymClassMutationVariables = Exact<{
  dayOfTheWeek: Scalars['Float'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  type: Scalars['String'];
}>;


export type CreateGymClassMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createGymClass'>
);

export type DeleteGymClassMutationVariables = Exact<{
  id: Scalars['Float'];
}>;


export type DeleteGymClassMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteGymClass'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateGymClassMutationVariables = Exact<{
  id: Scalars['Float'];
  startTime?: Maybe<Scalars['String']>;
  endTime?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
}>;


export type UpdateGymClassMutation = (
  { __typename?: 'Mutation' }
  & { updateGymClass: (
    { __typename?: 'GymClass' }
    & Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>
  ) }
);

export type GetGymQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGymQuery = (
  { __typename?: 'Query' }
  & { getGym: (
    { __typename?: 'Gym' }
    & Pick<Gym, 'name' | 'logoUrl'>
  ) }
);

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'User' }
    & Pick<User, 'firstName'>
  ) }
);

export type GetWorkoutQueryVariables = Exact<{
  type: Scalars['String'];
  day: Scalars['Float'];
}>;


export type GetWorkoutQuery = (
  { __typename?: 'Query' }
  & { getWorkoutByDay: (
    { __typename?: 'Workout' }
    & Pick<Workout, 'type' | 'externalApiProvider'>
    & { workoutSection?: Maybe<Array<(
      { __typename?: 'WorkoutSection' }
      & Pick<WorkoutSection, 'title' | 'body' | 'order'>
    )>> }
  ) }
);

export type GetGymClassesQueryVariables = Exact<{
  day: Scalars['Float'];
}>;


export type GetGymClassesQuery = (
  { __typename?: 'Query' }
  & { classes: Array<(
    { __typename?: 'GymClass' }
    & Pick<GymClass, 'id' | 'type' | 'startTime' | 'endTime'>
  )> }
);


export const CreateGymClassDocument = gql`
    mutation CreateGymClass($dayOfTheWeek: Float!, $startTime: String!, $endTime: String!, $type: String!) {
  createGymClass(
    createGymClass: {dayOfTheWeek: $dayOfTheWeek, startTime: $startTime, endTime: $endTime, type: $type}
  )
}
    `;
export type CreateGymClassMutationFn = Apollo.MutationFunction<CreateGymClassMutation, CreateGymClassMutationVariables>;

/**
 * __useCreateGymClassMutation__
 *
 * To run a mutation, you first call `useCreateGymClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGymClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGymClassMutation, { data, loading, error }] = useCreateGymClassMutation({
 *   variables: {
 *      dayOfTheWeek: // value for 'dayOfTheWeek'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateGymClassMutation(baseOptions?: Apollo.MutationHookOptions<CreateGymClassMutation, CreateGymClassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGymClassMutation, CreateGymClassMutationVariables>(CreateGymClassDocument, options);
      }
export type CreateGymClassMutationHookResult = ReturnType<typeof useCreateGymClassMutation>;
export type CreateGymClassMutationResult = Apollo.MutationResult<CreateGymClassMutation>;
export type CreateGymClassMutationOptions = Apollo.BaseMutationOptions<CreateGymClassMutation, CreateGymClassMutationVariables>;
export const DeleteGymClassDocument = gql`
    mutation DeleteGymClass($id: Float!) {
  deleteGymClass(id: $id)
}
    `;
export type DeleteGymClassMutationFn = Apollo.MutationFunction<DeleteGymClassMutation, DeleteGymClassMutationVariables>;

/**
 * __useDeleteGymClassMutation__
 *
 * To run a mutation, you first call `useDeleteGymClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGymClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGymClassMutation, { data, loading, error }] = useDeleteGymClassMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGymClassMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGymClassMutation, DeleteGymClassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGymClassMutation, DeleteGymClassMutationVariables>(DeleteGymClassDocument, options);
      }
export type DeleteGymClassMutationHookResult = ReturnType<typeof useDeleteGymClassMutation>;
export type DeleteGymClassMutationResult = Apollo.MutationResult<DeleteGymClassMutation>;
export type DeleteGymClassMutationOptions = Apollo.BaseMutationOptions<DeleteGymClassMutation, DeleteGymClassMutationVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  loginUser(loginInput: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const UpdateGymClassDocument = gql`
    mutation UpdateGymClass($id: Float!, $startTime: String, $endTime: String, $type: String) {
  updateGymClass(
    id: $id
    updateGymClass: {startTime: $startTime, endTime: $endTime, type: $type}
  ) {
    id
    type
    startTime
    endTime
  }
}
    `;
export type UpdateGymClassMutationFn = Apollo.MutationFunction<UpdateGymClassMutation, UpdateGymClassMutationVariables>;

/**
 * __useUpdateGymClassMutation__
 *
 * To run a mutation, you first call `useUpdateGymClassMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGymClassMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGymClassMutation, { data, loading, error }] = useUpdateGymClassMutation({
 *   variables: {
 *      id: // value for 'id'
 *      startTime: // value for 'startTime'
 *      endTime: // value for 'endTime'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUpdateGymClassMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGymClassMutation, UpdateGymClassMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGymClassMutation, UpdateGymClassMutationVariables>(UpdateGymClassDocument, options);
      }
export type UpdateGymClassMutationHookResult = ReturnType<typeof useUpdateGymClassMutation>;
export type UpdateGymClassMutationResult = Apollo.MutationResult<UpdateGymClassMutation>;
export type UpdateGymClassMutationOptions = Apollo.BaseMutationOptions<UpdateGymClassMutation, UpdateGymClassMutationVariables>;
export const GetGymDocument = gql`
    query getGym {
  getGym {
    name
    logoUrl
  }
}
    `;

/**
 * __useGetGymQuery__
 *
 * To run a query within a React component, call `useGetGymQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGymQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGymQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGymQuery(baseOptions?: Apollo.QueryHookOptions<GetGymQuery, GetGymQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGymQuery, GetGymQueryVariables>(GetGymDocument, options);
      }
export function useGetGymLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGymQuery, GetGymQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGymQuery, GetGymQueryVariables>(GetGymDocument, options);
        }
export type GetGymQueryHookResult = ReturnType<typeof useGetGymQuery>;
export type GetGymLazyQueryHookResult = ReturnType<typeof useGetGymLazyQuery>;
export type GetGymQueryResult = Apollo.QueryResult<GetGymQuery, GetGymQueryVariables>;
export function refetchGetGymQuery(variables?: GetGymQueryVariables) {
      return { query: GetGymDocument, variables: variables }
    }
export const GetUserDocument = gql`
    query getUser {
  getUser {
    firstName
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables?: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const GetWorkoutDocument = gql`
    query getWorkout($type: String!, $day: Float!) {
  getWorkoutByDay(type: $type, day: $day) {
    type
    externalApiProvider
    workoutSection {
      title
      body
      order
    }
  }
}
    `;

/**
 * __useGetWorkoutQuery__
 *
 * To run a query within a React component, call `useGetWorkoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutQuery({
 *   variables: {
 *      type: // value for 'type'
 *      day: // value for 'day'
 *   },
 * });
 */
export function useGetWorkoutQuery(baseOptions: Apollo.QueryHookOptions<GetWorkoutQuery, GetWorkoutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutQuery, GetWorkoutQueryVariables>(GetWorkoutDocument, options);
      }
export function useGetWorkoutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutQuery, GetWorkoutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutQuery, GetWorkoutQueryVariables>(GetWorkoutDocument, options);
        }
export type GetWorkoutQueryHookResult = ReturnType<typeof useGetWorkoutQuery>;
export type GetWorkoutLazyQueryHookResult = ReturnType<typeof useGetWorkoutLazyQuery>;
export type GetWorkoutQueryResult = Apollo.QueryResult<GetWorkoutQuery, GetWorkoutQueryVariables>;
export function refetchGetWorkoutQuery(variables?: GetWorkoutQueryVariables) {
      return { query: GetWorkoutDocument, variables: variables }
    }
export const GetGymClassesDocument = gql`
    query getGymClasses($day: Float!) {
  classes(day: $day) {
    id
    type
    startTime
    endTime
  }
}
    `;

/**
 * __useGetGymClassesQuery__
 *
 * To run a query within a React component, call `useGetGymClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGymClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGymClassesQuery({
 *   variables: {
 *      day: // value for 'day'
 *   },
 * });
 */
export function useGetGymClassesQuery(baseOptions: Apollo.QueryHookOptions<GetGymClassesQuery, GetGymClassesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGymClassesQuery, GetGymClassesQueryVariables>(GetGymClassesDocument, options);
      }
export function useGetGymClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGymClassesQuery, GetGymClassesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGymClassesQuery, GetGymClassesQueryVariables>(GetGymClassesDocument, options);
        }
export type GetGymClassesQueryHookResult = ReturnType<typeof useGetGymClassesQuery>;
export type GetGymClassesLazyQueryHookResult = ReturnType<typeof useGetGymClassesLazyQuery>;
export type GetGymClassesQueryResult = Apollo.QueryResult<GetGymClassesQuery, GetGymClassesQueryVariables>;
export function refetchGetGymClassesQuery(variables?: GetGymClassesQueryVariables) {
      return { query: GetGymClassesDocument, variables: variables }
    }
export const namedOperations = {
  Query: {
    getGym: 'getGym',
    getUser: 'getUser',
    getWorkout: 'getWorkout',
    getGymClasses: 'getGymClasses'
  },
  Mutation: {
    CreateGymClass: 'CreateGymClass',
    DeleteGymClass: 'DeleteGymClass',
    login: 'login',
    logout: 'logout',
    UpdateGymClass: 'UpdateGymClass'
  }
}