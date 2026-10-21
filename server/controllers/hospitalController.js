```js
const Hospital = require("../models/Hospital");
const Department = require("../models/Department");
const Doctor = require("../models/Doctor");

// =====================================================
// GET ALL HOSPITALS
// GET /api/hospitals
// =====================================================
const getHospitals = async (req, res, next) => {
  try {
    const { city, search } = req.query;

    const filter = {};

    if (city) {
      filter.city = {
        $regex: city,
        $options: "i",
      };
    }

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    const hospitals = await Hospital.find(filter)
      .populate("departments", "name description")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: hospitals.length,
      hospitals,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// GET HOSPITAL BY ID
// GET /api/hospitals/:id
// =====================================================
const getHospitalById = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(req.params.id)
      .populate("departments", "name description");

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found.",
      });
    }

    const doctors = await Doctor.find({
      hospitalId: hospital._id,
    }).populate(
      "departmentId",
      "name description"
    );

    res.status(200).json({
      success: true,
      hospital,
      doctors,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// CREATE HOSPITAL
// POST /api/hospitals
// Protected: ADMIN
// =====================================================
const createHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.create(req.body);

    res.status(201).json({
      success: true,
      message: "Hospital created successfully.",
      hospital,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// UPDATE HOSPITAL
// PUT /api/hospitals/:id
// Protected: ADMIN
// =====================================================
const updateHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hospital updated successfully.",
      hospital,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// DELETE HOSPITAL
// DELETE /api/hospitals/:id
// Protected: ADMIN
// =====================================================
const deleteHospital = async (req, res, next) => {
  try {
    const hospital = await Hospital.findById(
      req.params.id
    );

    if (!hospital) {
      return res.status(404).json({
        success: false,
        message: "Hospital not found.",
      });
    }

    await Department.deleteMany({
      hospitalId: hospital._id,
    });

    await Doctor.deleteMany({
      hospitalId: hospital._id,
    });

    await hospital.deleteOne();

    res.status(200).json({
      success: true,
      message: "Hospital deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getHospitals,
  getHospitalById,
  createHospital,
  updateHospital,
  deleteHospital,
};
```
