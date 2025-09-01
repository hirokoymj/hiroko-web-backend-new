"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.City = void 0;
const mongoose_1 = require("mongoose");
const citySchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: false,
    },
    country: {
        type: String,
        require: true,
    },
    coord: {
        lon: {
            type: Number,
        },
        lat: {
            type: Number,
        },
    },
});
exports.City = (0, mongoose_1.model)("City", citySchema);
//# sourceMappingURL=city.js.map