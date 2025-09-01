"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const mongoose_1 = require("mongoose");
const topicSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
    },
    subCategory: {
        type: mongoose_1.Schema.Types.ObjectId,
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
exports.Topic = (0, mongoose_1.model)("Topic", topicSchema);
//# sourceMappingURL=topic.js.map