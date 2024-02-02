import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault, } from "apollo-server-core";
import dotEnv from "dotenv";
import { connection } from "./database/util/index.js";
import { Query } from "./typeDefs/rootQuery.js";
import { typeDef as Category } from "./typeDefs/category.js";
import { typeDef as SubCategory } from "./typeDefs/subCategory.js";
import { typeDef as Topic } from "./typeDefs/topic.js";
import { typeDef as Weather } from "./typeDefs/weather.js";
import { typeDef as City } from "./typeDefs/city.js";
import WeatherAPI from "./datasources/weather-api.js";
import { categoryResolvers } from "./resolvers/category.js";
import { subCategoryResolvers } from "./resolvers/subCategory.js";
import { topicResolvers } from "./resolvers/topic.js";
import { dateScalarResolver } from "./resolvers/dateScaler.js";
import { weatherResolvers } from "./resolvers/weather.js";
import { cityResolvers } from "./resolvers/city.js";
dotEnv.config();
connection();
const server = new ApolloServer({
    typeDefs: [Query, Category, SubCategory, Topic, Weather, City],
    resolvers: [
        dateScalarResolver,
        categoryResolvers,
        subCategoryResolvers,
        topicResolvers,
        weatherResolvers,
        cityResolvers,
    ],
    csrfPrevention: true,
    cache: "bounded",
    introspection: true,
    plugins: [
        process.env.NODE_ENV === "production"
            ? ApolloServerPluginLandingPageProductionDefault({
                footer: false,
            })
            : ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
    dataSources: () => {
        return {
            myWeatherAPI: new WeatherAPI(),
        };
    },
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
