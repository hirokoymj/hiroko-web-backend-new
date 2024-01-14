import { Schema, model } from "mongoose";

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
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

export const SubCategory = model("SubCategory", subCategorySchema);
