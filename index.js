import express  from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authMiddleware from './middleware/auth.js';
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
await connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.get('/protected', authMiddleware, (req, res) => {
  res.json(
    { message: `Hello ${req.user.email}, you are authenticated!` }
);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});