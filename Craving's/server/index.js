import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cros";
import conectDB from "./src/config/db.js";

const app = express();

app.use(cors({orign :"http://localhost:5173"}))
app.use(express.json());

// app.use("/auth", Authrouter);

app.get("/", (req, res) => {
  console.log("server is working");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port");
  conectDB();
});
