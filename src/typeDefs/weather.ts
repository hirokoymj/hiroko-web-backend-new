import { gql } from "apollo-server";

export const typeDef = gql`
  extend type Query {
    currentWeather(lat: Float!, lon: Float!): CurrentWeather
    dailyForecast(lat: Float!, lon: Float!): DailyForecast
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
    cityId: Int!
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
  }

  type DailyForecast {
    cityId: Int!
    cityInfo: CityInfo
    forecastList: [Forecast]
  }
`;
