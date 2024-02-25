import { RESTDataSource } from "apollo-datasource-rest";
import _ from "lodash";
// dotEnv.config();
// const apiKey = process.env.WEATHER_API_KEY;
const apiKey = "be2d43efb7b89c5d69256d7ec44da9b8";
export default class WeatherAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.openweathermap.org/";
    }
    async getCurrentWeather(lat, lon) {
        const response = await this.get(`data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const { coord, weather, main, sys, dt, id, name } = response;
        const { main: condition = "", description = "", icon = "" } = weather[0];
        const cityId = id;
        const cityInfo = {
            name,
            country: _.get(sys, "country", ""),
            lon: _.get(coord, "lon", 0),
            lat: _.get(coord, "lat", 0),
        };
        const weather_info = {
            dt,
            condition,
            description,
            icon,
            temperature: {
                day: _.get(main, "temp", 0),
                min: _.get(main, "temp_min", 0),
                max: _.get(main, "temp_max", 0),
            },
            feelsLike: _.get(main, "feels_like", 0),
            humidity: _.get(main, "humidity", 0),
        };
        return {
            cityId,
            cityInfo,
            weather: weather_info,
        };
    }
    async getDailyForecast(lat, lon) {
        const response = await this.get(`data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=7&appid=${apiKey}&units=metric`);
        const { id, name, country, coord } = _.get(response, "city", {});
        const cityId = id;
        const cityInfo = {
            name,
            country,
            lat: _.get(coord, "lat", 0),
            lon: _.get(coord, "lon", 0),
        };
        const list = _.get(response, "list", []);
        const mappedData = _.map(list, (data) => {
            const { dt, main, wind } = data;
            const { icon, description } = _.get(data, "weather[0]", []);
            const temperature = {
                day: _.get(main, "temp", 0),
                min: _.get(main, "temp_min", 0),
                max: _.get(main, "temp_max", 0),
            };
            const humidity = _.get(main, "humidity", 0);
            const speed = _.get(wind, "speed", 0);
            const rain = _.get(data, "rain") == null ? 0 : _.get(data, "rain.3h");
            return {
                dt,
                condition: description,
                icon,
                temperature,
                humidity,
                wind: speed,
                rain,
            };
        });
        return {
            cityId,
            cityInfo,
            forecastList: mappedData,
        };
    }
}
/// TEST///
//https://api.openweathermap.org/data/2.5/weather?lat=35.6895&lon=139.6917&appid=be2d43efb7b89c5d69256d7ec44da9b8
//Geo coords [35.6895, 139.6917]
// Call 5 day / 3 hour forecast data
//https://api.openweathermap.org/data/2.5/forecast?lat=35.6895&lon=139.6917&cnt=7&appid=be2d43efb7b89c5d69256d7ec44da9b8
