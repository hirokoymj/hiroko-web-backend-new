"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.cityTypeDefs = (0, graphql_tag_1.gql) `
  extend type Query {
    cities(city: String!): [City]
  }

  type City {
    id: Int
    name: String
    country: String
    coord: Coord
  }

  type Coord {
    lon: Float
    lat: Float
  }
`;
//# sourceMappingURL=city.js.map