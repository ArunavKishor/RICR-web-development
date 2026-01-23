import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("tooken recieverd in cookies:", biscut);

    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(tea);
     if (!tea) {
      const error = new Error("Unothorised User ! please login again");
      error.statusCode = 401;
      next(error);
    }

    const verifiedUser = await findById(tea.id);
    if (!verifiedUser) {
      const error = new Error("Unothorised User ! please login again");
      error.statusCode = 401;
      return next(error);
    }

    req.user= verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};
