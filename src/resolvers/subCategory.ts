import mongoose from "mongoose";
import { Category } from "../database/models/category.js";
import { SubCategory } from "../database/models/subCategory.js";

export const subCategoryResolvers = {
  Query: {
    subCategoryAll: async () => {
      try {
        const subCategory = await SubCategory.find().sort({
          category: "asc",
          order: "asc",
        });
        return subCategory;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    subCategoryById: async (_, { id }) => {
      try {
        const _id = new mongoose.Types.ObjectId(id);
        const subCategory = await SubCategory.findById({ _id });
        return subCategory;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    subCategoryByCategory: async (_, { categoryId }) => {
      try {
        const subCategoryArray = await SubCategory.find({
          category: categoryId,
        }).sort({ order: -1 });
        return subCategoryArray;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    createSubCategory: async (_, { input }) => {
      try {
        const subCategory = new SubCategory({ ...input });
        const result = await subCategory.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    updateSubCategory: async (_, { id, input }) => {
      try {
        const subCategory = await SubCategory.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        );
        return subCategory;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteSubCategory: async (_, { id }) => {
      try {
        const subCategory = await SubCategory.findByIdAndDelete(id);
        return subCategory;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  // Field Level Resolver
  SubCategory: {
    category: async (parent) => {
      const category = await Category.findById(parent.category);
      return category;
    },
  },
};
