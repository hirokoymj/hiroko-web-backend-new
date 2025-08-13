import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotEnv from 'dotenv';
import { connection } from './database/util/index.js';
import { typeDefs } from './typeDefs/index.js';
import WeatherAPI from './datasources/weather-api.js';
import { categoryResolvers } from './resolvers/category.js';
import { subCategoryResolvers } from './resolvers/subCategory.js';
import { topicResolvers } from './resolvers/topic.js';
import { dateScalarResolver } from './resolvers/dateScaler.js';
import { weatherResolvers } from './resolvers/weather.js';
import { cityResolvers } from './resolvers/city.js';
dotEnv.config();
connection();
const resolvers = [
    dateScalarResolver,
    categoryResolvers,
    subCategoryResolvers,
    topicResolvers,
    weatherResolvers,
    cityResolvers,
];
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
