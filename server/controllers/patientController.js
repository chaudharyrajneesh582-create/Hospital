```js
const Patient = require("../models/Patient");
const User = require("../models/User");
const Appointment = require("../models/Appointment");

// =====================================================
// GET PATIENT PROFILE
// GET /api/patients/profile
// Protected: PATIENT
// =====================================================
const getProfile = async (req, res, next) => {
  try {
    // req.user comes from protect middleware
    const userId = req.user._id;

    const patient = await Patient.findOne({
      userId,
    }).populate("userId", "name email phone profileImage");

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found.",
      });
    }

    res.status(200).json({
      success: true,
      patient,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// UPDATE PATIENT PROFILE
// PUT /api/patients/profile
// Protected: PATIENT
// =====================================================
const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const {
      name,
      phone,
      dateOfBirth,
      gender,
      address,
      emergencyContact,
    } = req.body;

    // Find patient
    const patient = await Patient.findOne({
      userId,
    });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found.",
      });
    }

    // -----------------------------------------
    // Update User information
    // -----------------------------------------
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (name !== undefined) {
      user.name = name;
    }

    if (phone !== undefined) {
      user.phone = phone;
    }

    await user.save();

    // -----------------------------------------
    // Update Patient information
    // -----------------------------------------
    if (dateOfBirth !== undefined) {
      patient.dateOfBirth = dateOfBirth;
    }

    if (gender !== undefined) {
      patient.gender = gender;
    }

    if (address !== undefined) {
      patient.address = address;
    }

    if (emergencyContact !== undefined) {
      patient.emergencyContact = emergencyContact;
    }

    await patient.save();

    // Get updated profile
    const updatedPatient = await Patient.findById(
      patient._id
    ).populate("userId", "name email phone profileImage");

    res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      patient: updatedPatient,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// GET PATIENT APPOINTMENTS
// GET /api/patients/appointments
// Protected: PATIENT
// =====================================================
const getAppointments = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Find patient profile
    const patient = await Patient.findOne({
      userId,
    });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found.",
      });
    }

    // Get appointments belonging to this patient
    const appointments = await Appointment.find({
      patientId: patient._id,
    })
      .populate(
        "doctorId",
        "specialization qualification experience consultationFee averageConsultationTime rating image"
      )
      .populate(
        "hospitalId",
        "name address city phone email image"
      )
      .populate(
        "departmentId",
        "name description"
      )
      .sort({
        date: -1,
        createdAt: -1,
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
// GET PATIENT HISTORY
// GET /api/patients/history
// Protected: PATIENT
// =====================================================
const getHistory = async (req, res, next) => {
  try {
    const userId = req.user._id;

    // Find patient
    const patient = await Patient.findOne({
      userId,
    });

    if (!patient) {
      return res.status(404).json({
        success: false,
        message: "Patient profile not found.",
      });
    }

    // History contains finished/past appointments
    const history = await Appointment.find({
      patientId: patient._id,
      status: {
        $in: [
          "COMPLETED",
          "SKIPPED",
          "CANCELLED",
          "NO_SHOW",
        ],
      },
    })
      .populate(
        "doctorId",
        "specialization qualification experience consultationFee rating image"
      )
      .populate(
        "hospitalId",
        "name address city phone email image"
      )
      .populate(
        "departmentId",
        "name description"
      )
      .sort({
        date: -1,
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      count: history.length,
      history,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
  getAppointments,
  getHistory,
};
```
