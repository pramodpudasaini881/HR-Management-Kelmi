import express from "express";
import { createAdmin, createEmployee } from "../controllers/userController.js";
import { protect, authorize } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Only superadmin can create admins
router.post("/admins", protect, authorize("superadmin"), createAdmin);

// Superadmin + Admin can create employees
router.post("/employees", protect, authorize("superadmin", "admin"), createEmployee);

export default router;
