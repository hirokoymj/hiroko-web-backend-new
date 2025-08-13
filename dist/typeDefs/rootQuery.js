import { gql } from 'graphql-tag';
export const Query = gql `
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
