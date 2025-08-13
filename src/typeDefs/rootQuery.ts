import { gql } from 'graphql-tag';

export const rootTypeDefs = gql`
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
