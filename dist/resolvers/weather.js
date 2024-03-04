export const weatherResolvers = {
    Query: {
        currentWeatherByCity: async (_, { city, unit = "metric" }, { dataSources }) => {
            return dataSources.weatherAPI.getCurrentWeatherByCity(city, unit);
        },
        dailyForecast: async (_, { city, unit = "metric" }, { dataSources }) => {
            return dataSources.weatherAPI.getDailyForecast(city, unit);
        },
    },
};
