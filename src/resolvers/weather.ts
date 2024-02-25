export const weatherResolvers = {
  Query: {
    currentWeather: (_, { lat, lon, unit }, { dataSources }) =>
      dataSources.myWeatherAPI.getCurrentWeather(lat, lon),
    dailyForecast: (_, { lat, lon, unit }, { dataSources }) =>
      dataSources.myWeatherAPI.getDailyForecast(lat, lon),
  },
};
