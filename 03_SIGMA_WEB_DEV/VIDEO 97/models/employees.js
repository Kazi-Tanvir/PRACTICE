import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
    department: {
    type: String,
    required: true,
  },
    salary: {
    type: Number,
    required: true,
  },
  isActive:{
    type: Boolean,
    default: true,
  }
});

export default mongoose.model("Employee", employeeSchema);