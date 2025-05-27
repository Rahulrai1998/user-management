import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    otp: {
      type: String, 
      required: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, 
  }
);

export const UserModel = mongoose.model("user", userSchema);
