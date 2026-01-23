export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(currentUser); //old user data in jason formate
    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobileNumber = mobileNumber;
    await currentUser.save();

    console.log("New Data:",currentUser);
    res.status(200).json({message})
    

    console.log("updating the user");
    
  } catch (error) {
    next(error);
  }
};
