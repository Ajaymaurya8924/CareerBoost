const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    package: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    eligibility: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    selectionProcess: [
      {
        type: String,
      },
    ],

    applyLink: {
      type: String,
      default: "",
    },

    lastDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Company", companySchema);