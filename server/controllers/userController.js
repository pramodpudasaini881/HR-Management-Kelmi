import bcrypt from "bcryptjs";
import User from "../models/User.js";

// Superadmin creates admin
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const admin = await User.create({ name, email, password: hashed, role: "admin" });
    res.json({ success: true, admin });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Superadmin or Admin creates employee
export const createEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const employee = await User.create({ name, email, password: hashed, role: "employee" });
    res.json({ success: true, employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
