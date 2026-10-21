const mongoose = require("mongoose");

const queueSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    currentToken: {
      type: String,
      default: null,
    },

    queueStatus: {
      type: String,
      enum: ["ACTIVE", "PAUSED", "COMPLETED"],
      default: "ACTIVE",
    },

    patients: [
      {
        appointmentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Appointment",
        },

        tokenNumber: String,

        status: {
          type: String,
          enum: [
            "WAITING",
            "CALLED",
            "IN_CONSULTATION",
            "COMPLETED",
            "SKIPPED",
            "CANCELLED",
            "NO_SHOW",
          ],
        },
      },
    ],

    averageWaitingTime: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  }
);

queueSchema.index({
  doctorId: 1,
  date: 1,
});

const Queue = mongoose.model("Queue", queueSchema);

module.exports = Queue;