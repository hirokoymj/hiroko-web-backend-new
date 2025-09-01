"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subCategoryResolvers = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_js_1 = require("../database/models/category.js");
const subCategory_js_1 = require("../database/models/subCategory.js");
exports.subCategoryResolvers = {
    Query: {
        subCategories: async () => {
            try {
                const subCategory = await subCategory_js_1.SubCategory.find().sort({
                    name: 1,
                });
                return subCategory;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        subCategoryAll: async (_, { limit, skip }) => {
            try {
                const totalCount = await subCategory_js_1.SubCategory.countDocuments({});
                let query = subCategory_js_1.SubCategory.find().sort({
                    category: 1,
                    order: 1,
                });
                if (typeof limit === 'number' && limit > 0) {
                    query = query.limit(limit);
                }
                if (typeof skip === 'number' && skip >= 0) {
                    query = query.skip(skip);
                }
                const subCategories = await query.exec();
                return {
                    subCategories,
                    totalCount,
                };
            }
            catch (error) {
                console.error('Error in subCategoryAll resolver:', error);
                throw error;
            }
        },
        subCategoryById: async (_, { id }) => {
            try {
                const _id = new mongoose_1.default.Types.ObjectId(id);
                const subCategory = await subCategory_js_1.SubCategory.findById({ _id });
                return subCategory;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        subCategoryByCategory: async (_, { categoryId }) => {
            try {
                const subCategoryArray = await subCategory_js_1.SubCategory.find({
                    category: categoryId,
                }).sort({ order: -1 });
                return subCategoryArray;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    SubCategory: {
        category: async (parent) => {
            const category = await category_js_1.Category.findById(parent.category);
            return category;
        },
    },
    Mutation: {
        createSubCategory: async (_, { input }) => {
            try {
                const subCategory = new subCategory_js_1.SubCategory({ ...input });
                const result = await subCategory.save();
                return result;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateSubCategory: async (_, { id, input }) => {
            try {
                const subCategory = await subCategory_js_1.SubCategory.findByIdAndUpdate(id, { ...input }, { new: true });
                return subCategory;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
        deleteSubCategory: async (_, { id }) => {
            try {
                const subCategory = await subCategory_js_1.SubCategory.findByIdAndDelete(id);
                return subCategory;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
};
//# sourceMappingURL=subCategory.js.map