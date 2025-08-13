import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import dotEnv from 'dotenv';
import { connection } from './database/util/index.js';
// import { Query } from './typeDefs/rootQuery.js';
// import { typeDef as Category } from './typeDefs/category.js';
// import { typeDef as SubCategory } from './typeDefs/subCategory.js';
// import { typeDef as Topic } from './typeDefs/topic.js';
// import { typeDef as Weather } from './typeDefs/weather.js';
// import { typeDef as City } from './typeDefs/city.js';
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
//const typeDefs = [Query, Category, SubCategory, Topic, Weather, City];
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
