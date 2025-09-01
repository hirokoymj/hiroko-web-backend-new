"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.subCategoryTypeDefs = (0, graphql_tag_1.gql) `
  extend type Query {
    subCategories: [SubCategory!]
    subCategoryAll(limit: Int, skip: Int): PaginatedSubCategories
    subCategoryById(id: ID!): SubCategory
    subCategoryByCategory(categoryId: ID): [SubCategory!]
  }
  type PaginatedSubCategories {
    subCategories: [SubCategory!]!
    totalCount: Int!
  }

  extend type Mutation {
    createSubCategory(input: createSubCategoryInput): SubCategory
    updateSubCategory(id: ID!, input: updateSubCategoryInput!): SubCategory
    deleteSubCategory(id: ID!): SubCategory
  }

  input createSubCategoryInput {
    name: String!
    category: ID!
    order: Int
    categoryOrder: Int
  }

  input updateSubCategoryInput {
    name: String
    order: Int
    category: ID
  }

  type SubCategory {
    id: ID!
    name: String!
    order: Int
    category: Category
    createdAt: Date!
    updatedAt: Date!
  }
`;
//# sourceMappingURL=subCategory.js.map