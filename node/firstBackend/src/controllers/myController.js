import User from "../models/userModel.js";

export const UserRegister = async (request, response, next) => {
  try {
    const { fullName, email, phone, password } = request.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error ("All feilds Required");
      error.statusCode = 400;
      return next(error);
    };

    const existingUser= await User.findOne({email});
    if(existingUser){
      const error = new Error ("Email Already Exists");
      error.statusCode = 409;
      return next(error);
    };

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);

    response.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogin = async (request, response, next) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      const error = new Error ("All Fields Required");
      error.statusCode = 400;
      return next(error);
    };

    const existingUser = await User.find({ email });
    if (!existingUser) {
      const error = new Error ("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      const error = new Error ("User Not Authorized");
      error.statusCode = 402;
      return next(error);
    };

    console.log(existingUser);

    response.status(200).json({ message: "Welcome Back", data: existingUser });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export const UserLogout = async (request, response, next) => {
  try {
    response.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};

