import mongoose from "mongoose";
import { Category } from "../database/models/category.js";
import { SubCategory } from "../database/models/subCategory.js";
import { Topic } from "../database/models/topic.js";
export const topicResolvers = {
    Query: {
        topicAll: async (_) => {
            try {
                const topics = await Topic.find().sort({
                    category: "asc",
                    subCategory: "asc",
                });
                return topics;
            }
            catch (error) {
                console.log(error);
            }
        },
        topicById: async (_, { id }) => {
            try {
                const _id = new mongoose.Types.ObjectId(id);
                const topic = await Topic.findById({ _id });
                return topic;
            }
            catch (error) {
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
            }
            catch (error) {
                console.log(error);
            }
        },
    },
    Mutation: {
        createTopic: async (_, { input }) => {
            try {
                const topic = new Topic({ ...input });
                const result = await topic.save();
                return result;
            }
            catch (error) {
                console.log(error);
            }
        },
        deleteTopic: async (_, { id }) => {
            try {
                const topic = await Topic.findByIdAndDelete(id);
                return topic;
            }
            catch (error) {
                console.log(error);
            }
        },
        updateTopic: async (_, { id, input }) => {
            try {
                const topic = await Topic.findByIdAndUpdate(id, { ...input }, { new: true });
                return topic;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    // Field Level Resolver
    Topic: {
        category: async (parent) => {
            const category = await Category.findById(parent.category);
            return category;
        },
        subCategory: async (parent) => {
            const subCategory = await SubCategory.findById(parent.subCategory);
            return subCategory;
        },
    },
};
