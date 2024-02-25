export const weatherResolvers = {
  Query: {
    currentWeather: (_, { lat, lon }, { dataSources }) =>
      dataSources.myWeatherAPI.getCurrentWeather(lat, lon),
    dailyForecast: (_, { lat, lon }, { dataSources }) =>
      dataSources.myWeatherAPI.getDailyForecast(lat, lon),
  },
};
