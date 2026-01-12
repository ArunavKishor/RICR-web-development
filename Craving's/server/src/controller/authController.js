import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    //fetched data from frontend
    const { fullName, email, mobileNumber, password } = req.body;

    //verified that data 
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All Fildes Required");
      error.statusCode = 400;
      return next(error);
    }

    //chech for dublicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already registererd");
      error.statusCode = 409;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10); // just to incryp[t the password 10 times
    const hashedpassword = await bcrypt.hash(password, salt);

    //save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashedpassword,
    });

    //send this const to frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration Succesfull" });
    //

  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, resizeBy, next) => {
  try {
    const {email,password}=req.body;

    if (!email ||!password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser= await User.findOne({email});
     if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 402;
      return next(error);
    }

    //verify the password
    const isVerified= await bcrypt.compare(password,existingUser.password);
    if(!isVerified){
        const error=new Error ("Password didnt match");
        error.statusCode= 402;
        return next (error);
    }

    // send message to Frontend
    res.status(200).json({message : "Login Succesfull",data:existingUser});
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, resizeBy, next) => {
  try {
    res.status(200).json({message : "Logout Succesfull"});
  } catch (error) {
    next(error);
  }
};
