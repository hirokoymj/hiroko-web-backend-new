import mongoose from 'mongoose';
import { Category } from '../database/models/category.js';

export const categoryResolvers = {
  Query: {
    categories: async () => {
      try {
        const category = await Category.find().sort({ name: 1 });
        return category;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    categoryAll: async (_, { limit, skip }) => {
      try {
        const totalCount = await Category.countDocuments({});

        let query = Category.find().sort({ createdAt: -1 });
        if (typeof limit === 'number' && limit > 0) {
          query = query.limit(limit);
        }

        if (typeof skip === 'number' && skip >= 0) {
          query = query.skip(skip);
        }
        const categories = await query.exec(); // Execute the query
        return {
          categories,
          totalCount,
        };
      } catch (error) {
        console.error('Error in categoryAll resolver:', error);
        throw error;
      }
    },
    categoryById: async (_, { id }) => {
      try {
        const _id = new mongoose.Types.ObjectId(id);
        const category = await Category.findById({ _id });
        return category;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
  Mutation: {
    createCategory: async (_, { input }) => {
      try {
        const newCategory = new Category({ ...input });
        const result = await newCategory.save();
        return result;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updateCategory: async (_, { id, input }) => {
      try {
        const category = await Category.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        );
        return category;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    deleteCategory: async (_, { id }) => {
      try {
        const category = await Category.findByIdAndDelete(id);
        return category;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
