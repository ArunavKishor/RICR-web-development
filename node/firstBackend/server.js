import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/", (request, response) => {
  console.log("Server is Running");
  response.json({message:"Server is Running successfully"})
});

const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log("Server Started at port",port);
    
})
