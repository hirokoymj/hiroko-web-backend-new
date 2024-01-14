import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import dotEnv from "dotenv";

import { connection } from "./database/util/index.js";
import { typeDef as Category } from "./typeDefs/category.js";
import { typeDef as SubCategory } from "./typeDefs/subCategory.js";
import { typeDef as Topic } from "./typeDefs/topic.js";
import { typeDef as Weather } from "./typeDefs/weather.js";
import { typeDef as City } from "./typeDefs/city.js";
import { WeatherAPI } from "./datasources/weather.js";
import { categoryResolvers } from "./resolvers/category.js";
import { subCategoryResolvers } from "./resolvers/subCategory.js";
import { topicResolvers } from "./resolvers/topic.js";
import { dateScalarResolver } from "./resolvers/dateScaler.js";
import { weatherResolvers } from "./resolvers/weather.js";
import { cityResolvers } from "./resolvers/city.js";

dotEnv.config();

connection();

const Query = /* GraphQL */ `
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

const schema = makeExecutableSchema({
  typeDefs: [Query, Category, SubCategory, Topic, Weather, City],
  resolvers: [
    dateScalarResolver,
    categoryResolvers,
    subCategoryResolvers,
    topicResolvers,
    weatherResolvers,
    cityResolvers,
  ],
  dataSources: () => ({
    weatherAPI: new WeatherAPI(),
  }),
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
  plugins: [
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageGraphQLPlayground({
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});

const apolloServer = new ApolloServer({
  schema,
});

apolloServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
