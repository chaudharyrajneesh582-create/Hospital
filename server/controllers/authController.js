const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const Patient = require("../models/Patient");

// Generate JWT token
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

// ==========================================
// REGISTER USER
// POST /api/auth/register
// ==========================================
const register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      password,
    } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists.",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      password,
      salt
    );

    // Create user
    // Public registration always creates PATIENT
    // Do NOT allow user to choose ADMIN or STAFF here.
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
      role: "PATIENT",
    });

    // Create patient profile
    const patient = await Patient.create({
      userId: user._id,
    });

    // Generate token
    const token = generateToken(user._id);

    // Send response
    res.status(201).json({
      success: true,
      message: "Registration successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        patientId: patient._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// LOGIN USER
// POST /api/auth/login
// ==========================================
const login = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body;

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // IMPORTANT:
    // Password has select:false in User model,
    // so we must explicitly select it.
    const user = await User.findOne({
      email: email.toLowerCase(),
    }).select("+password");

    // Check user
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Generate JWT
    const token = generateToken(user._id);

    // Get patient profile if user is a patient
    let patientId = null;

    if (user.role === "PATIENT") {
      const patient = await Patient.findOne({
        userId: user._id,
      });

      if (patient) {
        patientId = patient._id;
      }
    }

    // Response
    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        patientId,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    next(error);
  }
};

// ==========================================
// GET CURRENT USER
// GET /api/auth/me
// ==========================================
const getMe = async (req, res, next) => {
  try {
    const user = req.user;

    let patientId = null;

    if (user.role === "PATIENT") {
      const patient = await Patient.findOne({
        userId: user._id,
      });

      if (patient) {
        patientId = patient._id;
      }
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        patientId,
        profileImage: user.profileImage,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe,
};