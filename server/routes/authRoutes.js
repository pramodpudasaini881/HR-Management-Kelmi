import express from "express";
import { registerSuperadmin, login } from "../controllers/authController.js";

const router = express.Router();

// router.post("/register-superadmin", registerSuperadmin); // one-time
router.post("/login", login);

export default router;
