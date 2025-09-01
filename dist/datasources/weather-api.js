"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherAPI = void 0;
const datasource_rest_1 = require("@apollo/datasource-rest");
const get_js_1 = __importDefault(require("lodash/get.js"));
const map_js_1 = __importDefault(require("lodash/map.js"));
const apiKey = process.env.WEATHER_APP_KEY;
class WeatherAPI extends datasource_rest_1.RESTDataSource {
    baseURL = 'https://api.openweathermap.org/';
    async getCurrentWeatherByCity(city, unit) {
        const response = await this.get(`data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`);
        const id = (0, get_js_1.default)(response, 'id');
        const cityInfo = {
            name: (0, get_js_1.default)(response, 'name', ''),
            country: (0, get_js_1.default)(response, 'sys.country', ''),
            lon: (0, get_js_1.default)(response, 'coord.lon'),
            lat: (0, get_js_1.default)(response, 'coord.lat'),
        };
        const weather = {
            dt: (0, get_js_1.default)(response, 'dt'),
            condition: (0, get_js_1.default)(response, 'weather[0].main'),
            description: (0, get_js_1.default)(response, 'weather[0].description'),
            icon: (0, get_js_1.default)(response, 'weather[0].icon'),
            temperature: {
                day: (0, get_js_1.default)(response, 'main.temp'),
                min: (0, get_js_1.default)(response, 'main.temp_min'),
                max: (0, get_js_1.default)(response, 'main.temp_max'),
            },
            feelsLike: (0, get_js_1.default)(response, 'main.feels_like'),
            humidity: (0, get_js_1.default)(response, 'main.humidity'),
        };
        return {
            id,
            cityInfo,
            weather,
        };
    }
    async getDailyForecast(city, unit) {
        const days = 7;
        const response = await this.get(`data/2.5/forecast/daily?q=${city}&units=${unit}&cnt=${days}&appid=${apiKey}`);
        const id = (0, get_js_1.default)(response, 'city.id');
        const cityInfo = {
            name: (0, get_js_1.default)(response, 'city.name'),
            country: (0, get_js_1.default)(response, 'city.country'),
            lon: (0, get_js_1.default)(response, 'city.coord.lon', 0),
            lat: (0, get_js_1.default)(response, 'city.coord.lat', 0),
        };
        const list = (0, get_js_1.default)(response, 'list', []);
        const mappedData = (0, map_js_1.default)(list, (data) => {
            const { dt, temp, humidity, speed, sunrise, sunset } = data;
            const { main, icon, description } = (0, get_js_1.default)(data, 'weather[0]', []);
            const temperature = {
                day: (0, get_js_1.default)(temp, 'day', 0),
                min: (0, get_js_1.default)(temp, 'min', 0),
                max: (0, get_js_1.default)(temp, 'max', 0),
            };
            const rain = (0, get_js_1.default)(data, 'rain') == null ? 0 : (0, get_js_1.default)(data, 'rain');
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
exports.WeatherAPI = WeatherAPI;
//# sourceMappingURL=weather-api.js.map