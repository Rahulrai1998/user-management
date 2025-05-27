import asyncHandler from "express-async-handler";
import { UserModel } from "../models/userModel.js";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find();
  res.status(200).json(users);
});

export const addUser = asyncHandler(async (req, res) => {
  const { name, email, phone, address, otp } = req.body;

  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("Name, email, and phone are mandatory");
  }

  const existingUser = await UserModel.findOne({ email });
  if (existingUser) {
    res.status(409);
    throw new Error("User with this email already exists");
  }

  const user = await UserModel.create({
    name,
    email,
    phone,
    address,
    otp,
    verified: false, 
  });

  res.status(201).json(user);
});

export const getUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
    new: true, 
    runValidators: true,
  });

  res.status(200).json(updatedUser);
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne(); 

  res.status(200).json({ message: "User deleted successfully", user });
});
