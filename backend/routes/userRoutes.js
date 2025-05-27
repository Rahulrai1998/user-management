import express, { Router } from "express";
import {
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.route("/").get(getUsers).post(addUser);
userRouter.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default userRouter;
