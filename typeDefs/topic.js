const { gql } = require("apollo-server");

module.exports = gql`
  extend type Query {
    topics(limit: Int, cursor: String, filter: [String]): TopicFeed!
    topicById(id: ID!): Topic!
    topicByCategory(categoryId: ID!): [Topic!]
    topicByCategoryAbbr(abbr: String!): [Topic!]
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

  type TopicFeed {
    topicFeed: [Topic!]
    totalCount: Int!
    pageInfo: PageInfo!
  }
`;
