import User from "../models/userModel.js";

export const UserRegister = async (request, response) => {
  try {
    const { fullName, email, phone, password } = request.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email Already Exists" });
      return;
    }

    const newUser = await User.create({ fullName, email, phone, password });

    console.log(newUser);

    response.status(201).json({ message: "User created Succesfully" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
export const UserLogin = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      response.status(400).json({ message: "All fields Required" });
      return;
    }

    const existingUser = await User.find({ email });
    if (!existingUser) {
      response.status(404).json({ message: "User Not Found" });
      return;
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      response.status(402).json({ message: "User Not Authorized" });
    }

    console.log(newUser);

    response.status(200).json({ message: "Welcom Back", data: existingUser });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
export const UserLogout = (request, response) => {
  try {
    response.status(200).json({ message: "Logout successfull" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
};
