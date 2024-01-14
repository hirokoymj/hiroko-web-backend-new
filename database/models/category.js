import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model("Category", categorySchema);
