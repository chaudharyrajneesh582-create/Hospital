```js
const Appointment = require("../models/Appointment");
const Patient = require("../models/Patient");
const Doctor = require("../models/Doctor");
const Hospital = require("../models/Hospital");
const Department = require("../models/Department");
const Queue = require("../models/Queue");

// =====================================================
// GENERATE TOKEN NUMBER
// =====================================================
const generateTokenNumber = async (doctorId, date) => {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const lastAppointment = await Appointment.findOne({
    doctorId,
    date: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  }).sort({ createdAt: -1 });

  let nextNumber = 1;

  if (lastAppointment?.tokenNumber) {
    const number = parseInt(
      lastAppointment.tokenNumber.replace(/\D/g, ""),
      10
    );

    if (!isNaN(number)) {
      nextNumber = number + 1;
    }
  }

  return `A${String(nextNumber).padStart(2, "0")}`;
};

// =====================================================
// GET ALL APPOINTMENTS
// GET /api/appointments
// =====================================================
const getAppointments = async (req, res, next) => {
  try {
    const {
      doctorId,
      patientId,
      hospitalId,
      departmentId,
      date,
      status,
    } = req.query;

    const filter = {};

    if (doctorId) filter.doctorId = doctorId;
    if (patientId) filter.patientId = patientId;
    if (hospitalId) filter.hospitalId = hospitalId;
    if (departmentId) filter.departmentId = departmentId;
    if (status) filter.status = status;

    if (date) {
      const selectedDate = new Date(date);

      const start = new Date(selectedDate);
      start.setHours(0, 0, 0, 0);

      const end = new Date(selectedDate);
      end.setHours(23, 59, 59, 999);

      filter.date = {
        $gte: start,
        $lte: end,
      };
    }

    const appointments =
      await Appointment.find(filter)
        .populate(
          "patientId",
          "userId dateOfBirth gender address emergencyContact"
        )
        .populate(
          {
            path: "doctorId",
            select:
              "userId specialization qualification experience consultationFee rating image",
            populate: {
              path: "userId",
              select: "name email phone profileImage",
            },
          }
        )
        .populate(
          "hospitalId",
          "name address city phone"
        )
        .populate(
          "departmentId",
          "name description"
        )
        .sort({
          date: 1,
          timeSlot: 1,
        });

    res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// GET APPOINTMENT BY ID
// GET /api/appointments/:id
// =====================================================
const getAppointmentById = async (
  req,
  res,
  next
) => {
  try {
    const appointment =
      await Appointment.findById(req.params.id)
        .populate("patientId")
        .populate(
          {
            path: "doctorId",
            populate: {
              path: "userId",
              select: "name email phone profileImage",
            },
          }
        )
        .populate("hospitalId")
        .populate("departmentId");

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// CREATE APPOINTMENT
// POST /api/appointments
// =====================================================
const createAppointment = async (
  req,
  res,
  next
) => {
  try {
    const {
      doctorId,
      hospitalId,
      departmentId,
      date,
      timeSlot,
      priority,
    } = req.body;

    if (
      !doctorId ||
      !hospitalId ||
      !departmentId ||
      !date ||
      !timeSlot
    ) {
      return res.status(400).json({
        success: false,
        message:
          "doctorId, hospitalId, departmentId, date and timeSlot are required.",
      });
    }

    // Find patient from logged-in user
    const patient = await Patient.findOne({
      userId: req.user._id,
    });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found.",
      });
    }

    // Check doctor
    const doctor = await Doctor.findById(
      doctorId
    );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    // Check hospital
    const hospital = await Hospital.findById(
      hospitalId
    );

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found.",
      });
    }

    // Check department
    const department =
      await Department.findById(departmentId);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    // Check if same patient already booked
    const existingAppointment =
      await Appointment.findOne({
        patientId: patient._id,
        doctorId,
        date: {
          $gte: new Date(date).setHours(
            0,
            0,
            0,
            0
          ),
          $lte: new Date(date).setHours(
            23,
            59,
            59,
            999
          ),
        },
        status: {
          $nin: ["CANCELLED", "NO_SHOW"],
        },
      });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message:
          "You already have an appointment with this doctor on this date.",
      });
    }

    // Generate token
    const tokenNumber =
      await generateTokenNumber(
        doctorId,
        date
      );

    // Create appointment
    const appointment =
      await Appointment.create({
        patientId: patient._id,
        doctorId,
        hospitalId,
        departmentId,
        date,
        timeSlot,
        tokenNumber,
        priority:
          priority === "EMERGENCY"
            ? "EMERGENCY"
            : "NORMAL",
        bookingType: "ONLINE",
        status: "WAITING",
      });

    // Create/update queue
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    let queue = await Queue.findOne({
      doctorId,
      date: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });

    if (!queue) {
      queue = await Queue.create({
        doctorId,
        departmentId,
        date,
        patients: [],
      });
    }

    queue.patients.push({
      appointmentId: appointment._id,
      tokenNumber,
      status: "WAITING",
    });

    await queue.save();

    const populatedAppointment =
      await Appointment.findById(
        appointment._id
      )
        .populate("patientId")
        .populate(
          {
            path: "doctorId",
            populate: {
              path: "userId",
              select: "name email",
            },
          }
        )
        .populate("hospitalId")
        .populate("departmentId");

    res.status(201).json({
      success: true,
      message:
        "Appointment booked successfully.",
      appointment: populatedAppointment,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// UPDATE APPOINTMENT
// PUT /api/appointments/:id
// =====================================================
const updateAppointment = async (
  req,
  res,
  next
) => {
  try {
    const appointment =
      await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Appointment updated successfully.",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// CANCEL APPOINTMENT
// PATCH /api/appointments/:id/cancel
// =====================================================
const cancelAppointment = async (
  req,
  res,
  next
) => {
  try {
    const appointment =
      await Appointment.findById(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    if (
      ["COMPLETED", "CANCELLED"].includes(
        appointment.status
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "This appointment cannot be cancelled.",
      });
    }

    appointment.status = "CANCELLED";

    await appointment.save();

    await Queue.updateOne(
      {
        doctorId: appointment.doctorId,
        date: appointment.date,
      },
      {
        $set: {
          "patients.$[patient].status":
            "CANCELLED",
        },
      },
      {
        arrayFilters: [
          {
            "patient.appointmentId":
              appointment._id,
          },
        ],
      }
    );

    res.status(200).json({
      success: true,
      message:
        "Appointment cancelled successfully.",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// RESCHEDULE APPOINTMENT
// PATCH /api/appointments/:id/reschedule
// =====================================================
const rescheduleAppointment = async (
  req,
  res,
  next
) => {
  try {
    const {
      date,
      timeSlot,
    } = req.body;

    if (!date || !timeSlot) {
      return res.status(400).json({
        success: false,
        message:
          "New date and timeSlot are required.",
      });
    }

    const appointment =
      await Appointment.findById(
        req.params.id
      );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found.",
      });
    }

    if (
      ["COMPLETED", "CANCELLED"].includes(
        appointment.status
      )
    ) {
      return res.status(400).json({
        success: false,
        message:
          "This appointment cannot be rescheduled.",
      });
    }

    const newToken =
      await generateTokenNumber(
        appointment.doctorId,
        date
      );

    appointment.date = date;
    appointment.timeSlot = timeSlot;
    appointment.tokenNumber = newToken;
    appointment.status = "WAITING";

    await appointment.save();

    res.status(200).json({
      success: true,
      message:
        "Appointment rescheduled successfully.",
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  cancelAppointment,
  rescheduleAppointment,
};
```
