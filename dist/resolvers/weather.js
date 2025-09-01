"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherResolvers = void 0;
exports.weatherResolvers = {
    Query: {
        currentWeatherByCity: async (_, { city, unit = "metric" }, { dataSources }) => {
            return dataSources.weatherAPI.getCurrentWeatherByCity(city, unit);
        },
        dailyForecast: async (_, { city, unit = "metric" }, { dataSources }) => {
            return dataSources.weatherAPI.getDailyForecast(city, unit);
        },
    },
};
//# sourceMappingURL=weather.js.map