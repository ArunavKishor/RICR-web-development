import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MngoDB connected at ", conn.connect.host);
    console.log("Database Name :", conn.connect.name);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default conectDB;
