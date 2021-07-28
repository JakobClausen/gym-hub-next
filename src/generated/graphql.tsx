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
  name?: Maybe<Scalars['String']>;
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
  user: User;
};

export type GymClass = {
  __typename?: 'GymClass';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
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
  createGymClass: GymClass;
  registerGym: Gym;
  registerUser: User;
  loginUser: LoginResponse;
  logout: Scalars['Boolean'];
};


export type MutationCreateGymClassArgs = {
  createGymClass: AddGymClass;
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

export type Query = {
  __typename?: 'Query';
  classes: Array<GymClass>;
  myGym: Gym;
  me: User;
};


export type QueryClassesArgs = {
  day?: Maybe<Scalars['Float']>;
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

export type GetGymClassesQueryVariables = Exact<{
  day: Scalars['Float'];
}>;


export type GetGymClassesQuery = (
  { __typename?: 'Query' }
  & { classes: Array<(
    { __typename?: 'GymClass' }
    & Pick<GymClass, 'id' | 'name' | 'startTime' | 'endTime'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName'>
  ) }
);


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
export const GetGymClassesDocument = gql`
    query getGymClasses($day: Float!) {
  classes(day: $day) {
    id
    name
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
export const MeDocument = gql`
    query me {
  me {
    id
    firstName
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;