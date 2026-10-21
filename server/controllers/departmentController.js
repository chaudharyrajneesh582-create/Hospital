```js
const Department = require("../models/Department");
const Hospital = require("../models/Hospital");
const Doctor = require("../models/Doctor");

// =====================================================
// GET ALL DEPARTMENTS
// GET /api/departments
// =====================================================
const getDepartments = async (req, res, next) => {
  try {
    const { hospitalId, search } = req.query;

    const filter = {};

    if (hospitalId) {
      filter.hospitalId = hospitalId;
    }

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    const departments = await Department.find(filter)
      .populate(
        "hospitalId",
        "name city address"
      )
      .sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// GET DEPARTMENT BY ID
// GET /api/departments/:id
// =====================================================
const getDepartmentById = async (req, res, next) => {
  try {
    const department = await Department.findById(
      req.params.id
    ).populate(
      "hospitalId",
      "name city address phone"
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    const doctors = await Doctor.find({
      departmentId: department._id,
    }).populate(
      "userId",
      "name email phone profileImage"
    );

    res.status(200).json({
      success: true,
      department,
      doctors,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// CREATE DEPARTMENT
// POST /api/departments
// Protected: ADMIN
// =====================================================
const createDepartment = async (req, res, next) => {
  try {
    const {
      name,
      description,
      hospitalId,
    } = req.body;

    if (!name || !hospitalId) {
      return res.status(400).json({
        success: false,
        message: "Name and hospitalId are required.",
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

    const department = await Department.create({
      name,
      description,
      hospitalId,
    });

    // Add department to hospital
    hospital.departments.push(department._id);
    await hospital.save();

    res.status(201).json({
      success: true,
      message: "Department created successfully.",
      department,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// UPDATE DEPARTMENT
// PUT /api/departments/:id
// Protected: ADMIN
// =====================================================
const updateDepartment = async (req, res, next) => {
  try {
    const department =
      await Department.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Department updated successfully.",
      department,
    });
  } catch (error) {
    next(error);
  }
};

// =====================================================
// DELETE DEPARTMENT
// DELETE /api/departments/:id
// Protected: ADMIN
// =====================================================
const deleteDepartment = async (req, res, next) => {
  try {
    const department = await Department.findById(
      req.params.id
    );

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found.",
      });
    }

    await Doctor.deleteMany({
      departmentId: department._id,
    });

    await Hospital.findByIdAndUpdate(
      department.hospitalId,
      {
        $pull: {
          departments: department._id,
        },
      }
    );

    await department.deleteOne();

    res.status(200).json({
      success: true,
      message: "Department deleted successfully.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
```
