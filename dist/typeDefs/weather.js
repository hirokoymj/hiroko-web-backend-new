import { gql } from "apollo-server";
export const typeDef = gql `
  extend type Query {
    currentWeatherByCity(city: String!, unit: Units): CurrentWeather
    dailyForecast(city: String!, unit: Units): DailyForecast
  }

  # For temperature in Fahrenheit use units=imperial
  # For temperature in Celsius use units=metric
  enum Units {
    metric
    imperial
  }

  type Temperature {
    day: Float
    min: Float
    max: Float
  }

  type CityInfo {
    name: String
    country: String
    lon: String
    lat: String
  }

  type Weather {
    dt: Int!
    condition: String
    description: String
    feelsLike: String
    icon: String
    temperature: Temperature
    humidity: Float
  }

  type CurrentWeather {
    id: Int! # Use cityId
    cityInfo: CityInfo
    weather: Weather
  }

  type Forecast {
    dt: Int!
    condition: String
    icon: String
    temperature: Temperature
    humidity: Float
    wind: Float
    rain: Float
    sunrise: Int
    sunset: Int
  }

  type DailyForecast {
    id: Int! # Use cityId
    cityInfo: CityInfo
    forecastList: [Forecast]
  }
`;
