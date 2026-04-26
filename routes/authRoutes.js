import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();


// const router = express.Router();

// ✅ Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // check existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.json({ message: "User registered", 
     user: {
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role
  }
   });
});

// ✅ Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Temporary DB (for now)
// let users = [];

// ✅ Register
// router.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   users.push({ email, password: hashedPassword });

//   res.json({ message: "User registered" });
// });

// ✅ Login
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(u => u.email === email);
//   if (!user) return res.status(400).json({ message: "User not found" });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return res.status(400).json({ message: "Invalid password" });

//   const token = jwt.sign(
//     { email },
//     process.env.JWT_SECRET,
//     { expiresIn: "1h" }
//   );

//   res.json({ token });
// });

export default router;