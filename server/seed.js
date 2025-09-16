import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";

dotenv.config();

const seedSuperadmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // Check if a superadmin already exists
    const exists = await User.findOne({ role: "superadmin" });
    if (exists) {
      console.log("⚠️ Superadmin already exists:", exists.email);
      process.exit(0);
    }

    // Create a new superadmin
    const hashedPassword = await bcrypt.hash("super@admin12", 10);

    const superadmin = new User({
      name: "Main Superadmin",
      email: "superadmin@kelmi.com",
      password: hashedPassword,
      role: "superadmin",
    });

    await superadmin.save();

    console.log("🎉 Superadmin seeded successfully!");
    console.log("Login credentials:");
    console.log("  Email: superadmin@example.com");
    console.log("  Password: superadmin123");

    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding superadmin:", err.message);
    process.exit(1);
  }
};

seedSuperadmin();
