import Contact from "../models/contactModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    
    //fetched data from frontend
    const { fullName, email,message } = req.body;

    //verified that data
    if (!fullName || !email || !contact) {
      console.log("value aa rahi hai ");
      
      const error = new Error("All Fildes Required");
      error.statusCode = 400;
      return next(error);
    }

    //chech for dublicate user before registration
    const existingUser = await Contact.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already registererd");
      error.statusCode = 409;
      return next(error);
    }

    console.log("sending data to DB");
    
   
    //save data to database
    const newContact = await Contact.create({
      fullName,
      email,
      message,
    });

    //send this const to frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration Succesfull" });
    //
  } catch (error) {
    next(error);
  }
};

