import { gql } from 'graphql-tag';

export const categoryTypeDefs = gql`
  extend type Query {
    categories: [Category!]
    categoryAll(limit: Int, skip: Int): PaginatedCategories
    categoryById(id: ID!): Category!
    numberSix: Int!
    numberSeven: Int!
    numberOne: Int!
  }
  type PaginatedCategories {
    categories: [Category!]!
    totalCount: Int!
  }

  extend type Mutation {
    createCategory(input: createCategoryInput): Category
    updateCategory(id: ID!, input: updateCategoryInput!): Category
    deleteCategory(id: ID!): Category
  }
  type Category {
    id: ID!
    name: String!
    abbr: String!
    order: Int
    createdAt: Date
    updatedAt: Date
  }

  input updateCategoryInput {
    name: String
    abbr: String
    order: Int
  }

  input createCategoryInput {
    name: String!
    abbr: String!
    order: Int
  }
`;
