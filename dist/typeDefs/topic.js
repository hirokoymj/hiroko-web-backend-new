"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topicTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.topicTypeDefs = (0, graphql_tag_1.gql) `
  extend type Query {
    topics: [Topic!]
    topicAll(limit: Int, skip: Int): PaginatedTopics
    topicById(id: ID!): Topic!
    topicByCategory(categoryId: ID!): [Topic!]
    topicByCategoryAbbr(abbr: String!): [Topic!]
  }

  type PaginatedTopics {
    topics: [Topic!]!
    totalCount: Int!
  }

  extend type Mutation {
    createTopic(input: createTopicInput): Topic
    deleteTopic(id: ID!): Topic
    updateTopic(id: ID!, input: updateTopicInput!): Topic
  }

  input createTopicInput {
    title: String!
    url: String!
    category: ID!
    subCategory: ID!
    order: Int
  }

  input updateTopicInput {
    title: String
    url: String
    category: ID!
    subCategory: ID!
    order: Int
  }

  type Topic {
    id: ID!
    title: String!
    url: String!
    category: Category
    subCategory: SubCategory
    order: Int
    createdAt: Date
    updatedAt: Date
  }
`;
//# sourceMappingURL=topic.js.map