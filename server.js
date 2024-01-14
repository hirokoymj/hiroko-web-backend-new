const { ApolloServer, gql } = require("apollo-server");
const dotEnv = require("dotenv");

const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");
const { connection } = require("./database/util");
const WeatherAPI = require("./datasources/weather");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");

// set env variables
dotEnv.config();

connection();

// const apolloServer = new ApolloServer({
//   typeDefs,
//   resolvers,
//   dataSources: () => ({
//     weatherAPI: new WeatherAPI(),
//   }),
//   introspection: true,
//   playground: true,
// });

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

apolloServer.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
