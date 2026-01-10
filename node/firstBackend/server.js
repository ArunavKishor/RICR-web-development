import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js"

const app = express();

app.use(express.json());

app.use("/auth",AuthRouter)

app.get("/", (request, response) => {
  console.log("Server is Running");
  response.json({ message: "Server is Running successfully" });
});

app.use((error,request,response,next)=>{
  const ErrorMessage =error.message;
  const StatusCode =error.statusCode;

  response.status (StatusCode).json({message: "ErrorMessage"})
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server Started at port", port);
  connectDB();
});
