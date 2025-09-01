"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityResolvers = void 0;
const city_js_1 = require("../database/models/city.js");
exports.cityResolvers = {
    Query: {
        cities: async (_, { city }) => {
            console.log('cities');
            try {
                const result = await city_js_1.City.find({
                    name: new RegExp(city, 'i'),
                });
                return result;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};
//# sourceMappingURL=city.js.map