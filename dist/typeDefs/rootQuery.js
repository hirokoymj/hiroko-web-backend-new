import { gql } from "apollo-server";
export const Query = gql `
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }
`;
