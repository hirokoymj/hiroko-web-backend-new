"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.rootTypeDefs = (0, graphql_tag_1.gql) `
  scalar Date
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;
//# sourceMappingURL=rootQuery.js.map