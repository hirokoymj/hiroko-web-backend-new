export const weatherResolvers = {
  Query: {
    currentWeather: (_, { lat, lon, unit = "metrics" }, { dataSources }) =>
      dataSources.myWeatherAPI.getCurrentWeather(lat, lon),
    dailyForecast: (_, { lat, lon, unit = "metrics" }, { dataSources }) =>
      dataSources.myWeatherAPI.getDailyForecast(lat, lon),
  },
};
