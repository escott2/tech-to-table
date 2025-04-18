import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { userRouter } from "./routes/users.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

const dbPassword = process.env.DB_PASSWORD;

mongoose.connect(
  `mongodb+srv://etriplett14:${dbPassword}@recipes.pznjmby.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes`
);

app.listen(3001, () => console.log("SERVER STARTED!"));
