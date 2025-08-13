import { gql } from 'graphql-tag';
export const cityTypeDefs = gql `
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
