import mongoose from "mongoose";

const RunSchema = new mongoose.Schema(
  {
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
      default: "",
    },

    errors: {
      type: [String],
      default: [],
    },

    aiResponse: {
      rootCause: {
        type: String,
        default: "",
      },

      explanation: {
        type: String,
        default: "",
      },

      fix: {
        type: String,
        default: "",
      },

      commands: {
        type: [String],
        default: [],
      },

      confidence: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Run = mongoose.model("Run", RunSchema);

export default Run;