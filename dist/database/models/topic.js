import { model, Schema } from "mongoose";
const topicSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
    },
    order: {
        type: Number,
        required: false,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
}, {
    timestamps: true,
});
export const Topic = model("Topic", topicSchema);
