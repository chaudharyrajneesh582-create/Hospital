```js
const Doctor = require("../models/Doctor");
const User = require("../models/User");
const Hospital = require("../models/Hospital");
const Department = require("../models/Department");

// =====================================================
// GET ALL DOCTORS
// GET /api/doctors
// =====================================================
const getDoctors = async (req, res, next) => {
  try {
    const {
      hospitalId,
      departmentId,
      specialization,
      search,
    } = req.query;

    const filter = {};

    if (hospitalId) {
      filter.hospitalId = hospitalId;
    }

    if (departmentId) {
      filter.departmentId = departmentId;
    }

    if (specialization) {
      filter.specialization = {
        $regex: specialization,
        $options: "i",
      };
    }

    const doctors = await Doctor.find(filter)
      .populate(
        "userId",
        "name email phone profileImage"
      )
      .populate(
        "hospitalId",
        "name address city"
      )
      .populate(
        "departmentId",
        "name description"
      )
      .sort({ rating: -1 });

    let result = doctors;

    if (search) {
      const searchText = search.toLowerCase();

      result = doctors.filter((doctor) => {
        const doctorName =
          doctor.userId?.name?.toLowerCase() || "";

        const specialization =
          doctor.specialization?.toLowerCase() || "";

        return (
          doctorName.includes(searchText) ||
          specialization.includes(searchText)
        );
      });
    }

    res.status(200).json({
      success: true,
      count: result.length,
      doctors: result,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// GET DOCTOR BY ID
// GET /api/doctors/:id
// =====================================================
const getDoctorById = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(
      req.params.id
    )
      .populate(
        "userId",
        "name email phone profileImage"
      )
      .populate(
        "hospitalId",
        "name address city phone email image"
      )
      .populate(
        "departmentId",
        "name description"
      );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// CREATE DOCTOR
// POST /api/doctors
// Protected: ADMIN
// =====================================================
const createDoctor = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      specialization,
      qualification,
      experience,
      consultationFee,
      hospitalId,
      departmentId,
      availability,
      averageConsultationTime,
      languages,
      about,
      image,
    } = req.body;

    if (
      !name ||
      !email ||
      !password ||
      !specialization ||
      !hospitalId ||
      !departmentId
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, password, specialization, hospitalId and departmentId are required.",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const hospital = await Hospital.findById(
      hospitalId
    );

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found.",
      });
    }

    const department = await Department.findById(
      departmentId
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    // Password hashing
    const bcrypt = require("bcryptjs");

    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create user account
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      role: "STAFF",
      profileImage: image || "",
    });

    // Create doctor profile
    const doctor = await Doctor.create({
      userId: user._id,
      specialization,
      qualification,
      experience,
      consultationFee,
      hospitalId,
      departmentId,
      availability,
      averageConsultationTime,
      languages,
      about,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Doctor created successfully.",
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// UPDATE DOCTOR
// PUT /api/doctors/:id
// Protected: ADMIN
// =====================================================
const updateDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(
      req.params.id
    );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    const {
      name,
      phone,
      ...doctorData
    } = req.body;

    if (name !== undefined || phone !== undefined) {
      const user = await User.findById(
        doctor.userId
      );

      if (user) {
        if (name !== undefined) {
          user.name = name;
        }

        if (phone !== undefined) {
          user.phone = phone;
        }

        await user.save();
      }
    }

    Object.assign(doctor, doctorData);

    await doctor.save();

    const updatedDoctor =
      await Doctor.findById(doctor._id)
        .populate(
          "userId",
          "name email phone profileImage"
        )
        .populate(
          "hospitalId",
          "name address city"
        )
        .populate(
          "departmentId",
          "name description"
        );

    res.status(200).json({
      success: true,
      message: "Doctor updated successfully.",
      doctor: updatedDoctor,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// DELETE DOCTOR
// DELETE /api/doctors/:id
// Protected: ADMIN
// =====================================================
const deleteDoctor = async (req, res, next) => {
  try {
    const doctor = await Doctor.findById(
      req.params.id
    );

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found.",
      });
    }

    await User.findByIdAndDelete(
      doctor.userId
    );

    await doctor.deleteOne();

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
```
