import mongoose from 'mongoose';
import { Category } from '../database/models/category';
import { SubCategory } from '../database/models/subCategory';
import { Topic } from '../database/models/topic';

export const topicResolvers = {
  Query: {
    topics: async (_) => {
      try {
        const topics = await Topic.find().sort({
          category: 1,
          subCategory: 1,
        });
        return topics;
      } catch (error) {
        console.log(error);
      }
    },
    topicAll: async (_, { limit, skip }) => {
      try {
        const totalCount = await Topic.countDocuments({});

        let query = Topic.find().sort({
          createdAt: -1,
          updatedAt: -1,
          category: 1,
          subCategory: 1,
        });

        if (typeof limit === 'number' && limit > 0) {
          query = query.limit(limit);
        }

        if (typeof skip === 'number' && skip >= 0) {
          query = query.skip(skip);
        }

        const topics = await query.exec();

        return {
          topics,
          totalCount,
        };
      } catch (error) {
        console.error('Error in topicAll resolver:', error);
        throw error;
      }
    },
    topicById: async (_, { id }) => {
      try {
        const _id = new mongoose.Types.ObjectId(id);
        const topic = await Topic.findById({ _id });
        return topic;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    topicByCategory: async (_, { categoryId }) => {
      const topicArray = await Topic.find({ category: categoryId }).sort({
        order: 1,
      });
      return topicArray;
    },
    topicByCategoryAbbr: async (_, { abbr }) => {
      try {
        const { id } = await Category.findOne({ abbr });
        const topics = await Topic.find({ category: id }).sort({
          order: 1,
        });
        return topics;
      } catch (error) {
        console.log(error);
      }
    },
  },
  // Resolver chain
  Topic: {
    category: async ({ category: { _id } }) => {
      const category = await Category.findById(_id);
      return category;
    },
    subCategory: async ({ subCategory: { _id } }) => {
      const subCategory = await SubCategory.findById(_id);
      return subCategory;
    },
  },
  Mutation: {
    createTopic: async (_, { input }) => {
      try {
        const topic = new Topic({ ...input });
        const result = await topic.save();
        return result;
      } catch (error) {
        console.log(error);
      }
    },
    deleteTopic: async (_, { id }) => {
      try {
        const topic = await Topic.findByIdAndDelete(id);
        return topic;
      } catch (error) {
        console.log(error);
      }
    },
    updateTopic: async (_, { id, input }) => {
      try {
        const topic = await Topic.findByIdAndUpdate(
          id,
          { ...input },
          { new: true }
        );
        return topic;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
  },
};
