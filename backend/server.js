import express from "express";
import dotenv from "dotenv/config";
import { errorHandler } from "./middleware/errorHandler.js";
import { connectDB } from "./config/dbConnection.js";
import cors from "cors";

import userRouter from "./routes/userRoutes.js";

connectDB();
const app = express();
app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
const port = process.env.PORT || 5000;

//middlewares
//REQUEST BODY PARSER
app.use(express.json());
//ROUTES
app.use("/api/user", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
