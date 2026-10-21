const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Hospital name is required"],
      trim: true,
    },

    address: {
      type: String,
      required: [true, "Hospital address is required"],
      trim: true,
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    departments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
      },
    ],

    openingHours: {
      monday: {
        open: String,
        close: String,
      },

      tuesday: {
        open: String,
        close: String,
      },

      wednesday: {
        open: String,
        close: String,
      },

      thursday: {
        open: String,
        close: String,
      },

      friday: {
        open: String,
        close: String,
      },

      saturday: {
        open: String,
        close: String,
      },

      sunday: {
        open: String,
        close: String,
      },
    },

    location: {
      latitude: Number,
      longitude: Number,
    },

    image: {
      type: String,
      default: "",
    },
  },

  {
    timestamps: true,
  }
);

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;