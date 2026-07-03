import mongoose from "mongoose";

const RunSchema = new mongoose.Schema({

  runId: {
    type: String,
    required: true,
  },

  repo: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  logs: {
    type: String,
  },

  errors: {
    type: [String],
  },

  aiResponse: {
    type: String,
  },

}, {
  timestamps: true,
});

const Run = mongoose.model("Run", RunSchema);

export default Run;