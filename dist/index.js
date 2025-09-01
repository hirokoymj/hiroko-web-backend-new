"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const dotenv_1 = __importDefault(require("dotenv"));
const index_js_1 = require("./database/util/index.js");
const index_js_2 = require("./typeDefs/index.js");
const weather_api_js_1 = require("./datasources/weather-api.js");
const category_js_1 = require("./resolvers/category.js");
const subCategory_js_1 = require("./resolvers/subCategory.js");
const topic_js_1 = require("./resolvers/topic.js");
const dateScaler_js_1 = require("./resolvers/dateScaler.js");
const weather_js_1 = require("./resolvers/weather.js");
const city_js_1 = require("./resolvers/city.js");
dotenv_1.default.config();
(0, index_js_1.connection)();
const resolvers = [
    dateScaler_js_1.dateScalarResolver,
    category_js_1.categoryResolvers,
    subCategory_js_1.subCategoryResolvers,
    topic_js_1.topicResolvers,
    weather_js_1.weatherResolvers,
    city_js_1.cityResolvers,
];
async function startApolloServer() {
    const server = new server_1.ApolloServer({ typeDefs: index_js_2.typeDefs, resolvers });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    weatherAPI: new weather_api_js_1.WeatherAPI({ cache }),
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
//# sourceMappingURL=index.js.map