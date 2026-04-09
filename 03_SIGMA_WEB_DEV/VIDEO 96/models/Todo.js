import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Untitled Task"
    },
    description: {
        type: String,
        default: "No description provided"
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Todo", todoSchema);