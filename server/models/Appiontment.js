const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    hospitalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
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

    timeSlot: {
      type: String,
      required: true,
    },

    tokenNumber: {
      type: String,
      required: true,
    },

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
      default: "WAITING",
    },

    bookingType: {
      type: String,
      enum: ["ONLINE", "WALK_IN"],
      default: "ONLINE",
    },

    priority: {
      type: String,
      enum: ["NORMAL", "EMERGENCY"],
      default: "NORMAL",
    },
  },

  {
    timestamps: true,
  }
);

appointmentSchema.index({
  doctorId: 1,
  date: 1,
});

appointmentSchema.index({
  patientId: 1,
  date: 1,
});

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);

module.exports = Appointment;