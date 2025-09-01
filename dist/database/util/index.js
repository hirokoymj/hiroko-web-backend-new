"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_DB_URL);
        console.log("Database Connected Successfully");
    }
    catch (error) {
        console.log(error);
        throw error;
    }
};
exports.connection = connection;
//# sourceMappingURL=index.js.map