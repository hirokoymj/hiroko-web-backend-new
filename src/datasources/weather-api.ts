import { RESTDataSource } from 'apollo-datasource-rest';
import get from 'lodash/get.js';
import map from 'lodash/map.js';

const apiKey = '4c7be587c84ac188dca5d7b86e565b11';

export default class WeatherAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.openweathermap.org/';
  }

  async getCurrentWeatherByCity(city, unit) {
    const response = await this.get(
      `data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
    );

    const id = get(response, 'id'); // City Id
    const cityInfo = {
      name: get(response, 'name', ''),
      country: get(response, 'sys.country', ''),
      lon: get(response, 'coord.lon'),
      lat: get(response, 'coord.lat'),
    };
    const weather = {
      dt: get(response, 'dt'),
      condition: get(response, 'weather[0].main'),
      description: get(response, 'weather[0].description'),
      icon: get(response, 'weather[0].icon'),
      temperature: {
        day: get(response, 'main.temp'),
        min: get(response, 'main.temp_min'),
        max: get(response, 'main.temp_max'),
      },
      feelsLike: get(response, 'main.feels_like'),
      humidity: get(response, 'main.humidity'),
    };

    return {
      id,
      cityInfo,
      weather,
    };
  }

  async getDailyForecast(city, unit) {
    const days = 7;
    const response = await this.get(
      `data/2.5/forecast/daily?q=${city}&units=${unit}&cnt=${days}&appid=${apiKey}`
    );

    const id = get(response, 'city.id');
    const cityInfo = {
      name: get(response, 'city.name'),
      country: get(response, 'city.country'),
      lon: get(response, 'city.coord.lon', 0),
      lat: get(response, 'city.coord.lat', 0),
    };
    const list = get(response, 'list', []);

    const mappedData = map(list, (data) => {
      const { dt, temp, humidity, speed, sunrise, sunset } = data;
      const { main, icon, description } = get(data, 'weather[0]', []);
      const temperature = {
        day: get(temp, 'day', 0),
        min: get(temp, 'min', 0),
        max: get(temp, 'max', 0),
      };
      const rain = get(data, 'rain') == null ? 0 : get(data, 'rain');

      return {
        dt,
        condition: description,
        icon,
        temperature,
        humidity,
        wind: speed,
        rain,
        sunrise,
        sunset,
      };
    });

    return {
      id,
      cityInfo,
      forecastList: mappedData,
    };
  }
}
//TEST URL
// https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=4c7be587c84ac188dca5d7b86e565b11

// https://api.openweathermap.org/data/2.5/forecast/daily?q=tokyo&units=metric&cnt=7&appid=4c7be587c84ac188dca5d7b86e565b11

// https://api.openweathermap.org/data/2.5/forecast/daily?q=tokyo&units=metric&cnt=7&appid=4c7be587c84ac188dca5d7b86e565b11
