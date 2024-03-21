import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(process.env.PORT || 4500, () =>
      console.log("Server is running on port 4500"),
    ),
  )
  .catch((error) => console.error(error));
