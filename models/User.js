import mongoose from "mongoose";

const Role = {
    user: "user",
    admin: "admin",
    moderator: "moderator",
    guest: "guest"
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user",
    enum: Object.values(Role)
  }
}, { timestamps: true });

export default mongoose.model("User", userSchema);