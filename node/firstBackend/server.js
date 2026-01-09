import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./src/config/db.js";

const app = express();

app.use(express.json());










app.get("/", (request, response) => {
  console.log("Server is Running");
  response.json({message:"Server is Running successfully"})
});

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log("Server Started at port",port);
    connectDB();
})
