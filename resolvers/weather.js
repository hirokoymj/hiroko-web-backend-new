export const weatherResolvers = {
  Query: {
    currentWeatherByCity: (_, { city, unit = "metric" }, { dataSources }) => {
      dataSources.myWeatherAPI.getCurrentWeatherByCity(city, unit);
    },
    dailyForecast: (_, { city, unit = "metric" }, { dataSources }) =>
      dataSources.myWeatherAPI.getDailyForecast(city, unit),
  },
};
