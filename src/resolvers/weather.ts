export const weatherResolvers = {
  Query: {
    currentWeatherByCity: (_, { city, unit = "metric" }, { dataSources }) =>
      dataSources.myWeatherAPI.getCurrentWeather(city, unit),
    dailyForecast: (_, { city, unit = "metric" }, { dataSources }) =>
      dataSources.myWeatherAPI.getDailyForecast(city, unit),
  },
};
