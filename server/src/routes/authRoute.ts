import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/userSchema"; // your mongoose model
import { generateToken } from "../utils/JWT";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { userName, email, role, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ message: "Username, email and password are required" });
  }

  try {
    const existingUser = await User.findOne({ userName });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userName, email, role, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({ userName: user.userName, id: user._id });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

export default router;
