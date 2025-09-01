"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResolvers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_js_1 = require("../database/models/category.js");
exports.categoryResolvers = {
    Query: {
        categories: async () => {
            try {
                const category = await category_js_1.Category.find().sort({ name: 1 });
                return category;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        categoryAll: async (_, { limit, skip }) => {
            try {
                const totalCount = await category_js_1.Category.countDocuments({});
                let query = category_js_1.Category.find().sort({ createdAt: -1 });
                if (typeof limit === 'number' && limit > 0) {
                    query = query.limit(limit);
                }
                if (typeof skip === 'number' && skip >= 0) {
                    query = query.skip(skip);
                }
                const categories = await query.exec();
                return {
                    categories,
                    totalCount,
                };
            }
            catch (error) {
                console.error('Error in categoryAll resolver:', error);
                throw error;
            }
        },
        categoryById: async (_, { id }) => {
            try {
                const _id = new mongoose_1.default.Types.ObjectId(id);
                const category = await category_js_1.Category.findById({ _id });
                return category;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        numberSix: () => {
            return 6;
        },
        numberSeven: () => {
            return 7;
        },
    },
    Mutation: {
        createCategory: async (_, { input }) => {
            try {
                const newCategory = new category_js_1.Category({ ...input });
                const result = await newCategory.save();
                return result;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        updateCategory: async (_, { id, input }) => {
            try {
                const category = await category_js_1.Category.findByIdAndUpdate(id, { ...input }, { new: true });
                return category;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        deleteCategory: async (_, { id }) => {
            try {
                const category = await category_js_1.Category.findByIdAndDelete(id);
                return category;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};
//# sourceMappingURL=category.js.map