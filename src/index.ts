import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { connection } from './database/util/dbConnection';
import { typeDefs } from './typeDefs/schemas';
import { resolvers } from './resolvers/resolvers';
import { WeatherAPI } from './datasources/weather-api';

connection();

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          weatherAPI: new WeatherAPI({ cache }),
        },
      };
    },
  });

  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
  `);
}

startApolloServer();
