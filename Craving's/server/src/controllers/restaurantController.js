import Menu from "../models/menuSchema.js";
import { UploadMultipleToCloudinary } from "../utils/imageUploader.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcryptjs";

/* ===================== ADD MENU ITEM ===================== */
export const RestaurantAddMenuItem = async (req, res, next) => {
  try {
    const {
      itemName,
      description,
      price,
      type,
      preparationTime,
      availability,
      servingSize,
      cuisine,
    } = req.body;

    const CurrentUser = req.user;

    if (
      !itemName ||
      !description ||
      !price ||
      !type ||
      !preparationTime ||
      !availability ||
      !servingSize ||
      !cuisine
    ) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }

    const images = await UploadMultipleToCloudinary(req.files);

    const newMenuItem = await Menu.create({
      itemName,
      description,
      price,
      type,
      preparationTime,
      availability,
      servingSize,
      cuisine,
      images,
      resturantID: CurrentUser._id,
    });

    res.status(201).json({
      message: "Menu Item Added Successfully",
      data: newMenuItem,
    });
  } catch (error) {
    next(error);
  }
};

/* ===================== EDIT MENU ITEM ===================== */
export const RestaurantEditMenuItem = async (req, res, next) => {
  try {
    const {
      itemName,
      description,
      price,
      type,
      preparationTime,
      availability,
      servingSize,
      cuisine,
    } = req.body;

    const { id } = req.params;

    if (
      !itemName ||
      !description ||
      !price ||
      !type ||
      !preparationTime ||
      !availability ||
      !servingSize ||
      !cuisine
    ) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }

    let images = [];
    if (req.files?.length) {
      images = await UploadMultipleToCloudinary(req.files);
    }

    const existingMenuItem = await Menu.findById(id);
    if (!existingMenuItem) {
      const error = new Error("Menu Item Not Found");
      error.statusCode = 404;
      return next(error);
    }

    existingMenuItem.itemName = itemName;
    existingMenuItem.description = description;
    existingMenuItem.price = price;
    existingMenuItem.type = type;
    existingMenuItem.preparationTime = preparationTime;
    existingMenuItem.availability = availability;
    existingMenuItem.servingSize = servingSize;
    existingMenuItem.cuisine = cuisine;
    existingMenuItem.images =
      images.length > 0 ? images : existingMenuItem.images;

    await existingMenuItem.save();

    res.status(200).json({
      message: "Menu Item Updated Successfully",
    });
  } catch (error) {
    next(error);
  }
};

/* ===================== GET MENU ITEMS ===================== */
export const GetRestaurantMenuItem = async (req, res, next) => {
  try {
    const CurrentUser = req.user;

    const menuItems = await Menu.find({
      resturantID: CurrentUser._id,
    });

    res.status(200).json({
      message: "Menu Items Fetched Successfully",
      data: menuItems,
    });
  } catch (error) {
    next(error);
  }
};

/* ===================== UPDATE RESTAURANT PROFILE ===================== */
export const RestaurantUpdate = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      mobileNumber,
      gender,
      dob,
      address,
      city,
      pin,
      restaurantName,
      cuisine,
      documents,
      paymentDetails,
      geoLocation,
    } = req.body;

    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("Full Name, Email, and Mobile Number are required");
      error.statusCode = 400;
      return next(error);
    }

    currentUser.fullName = fullName;
    currentUser.email = email.toLowerCase();
    currentUser.mobileNumber = mobileNumber;
    currentUser.gender = gender || currentUser.gender;
    currentUser.dob = dob || currentUser.dob;
    currentUser.address = address || currentUser.address;
    currentUser.city = city || currentUser.city;
    currentUser.pin = pin || currentUser.pin;
    currentUser.restaurantName =
      restaurantName || currentUser.restaurantName;
    currentUser.cuisine = cuisine || currentUser.cuisine;

    if (documents) {
      currentUser.documents = {
        gst: documents.gst || "N/A",
        fssai: documents.fssai || "N/A",
        rc: documents.rc || "N/A",
        dl: documents.dl || "N/A",
        uidai: documents.uidai || "N/A",
        pan: documents.pan || "N/A",
      };
    }

    if (paymentDetails) {
      currentUser.paymentDetails = {
        upi: paymentDetails.upi || "N/A",
        account_number: paymentDetails.account_number || "N/A",
        ifs_Code: paymentDetails.ifs_Code || "N/A",
      };
    }

    if (geoLocation) {
      currentUser.geoLocation = {
        lat: geoLocation.lat || "N/A",
        lon: geoLocation.lon || "N/A",
      };
    }

    await currentUser.save();

    res.status(200).json({
      message: "User Updated Successfully",
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};

/* ===================== CHANGE PROFILE PHOTO ===================== */
export const RestaurantChangePhoto = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const dp = req.file;

    if (!dp) {
      const error = new Error("Profile Picture required");
      error.statusCode = 400;
      return next(error);
    }

    if (currentUser.photo?.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    const dataURI = `data:${dp.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    currentUser.photo = {
      url: result.secure_url,
      publicID: result.public_id,
    };

    await currentUser.save();

    res.status(200).json({
      message: "Photo Updated Successfully",
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};

/* ===================== RESET PASSWORD ===================== */
export const RestaurantResetPassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const currentUser = req.user;

    if (!oldPassword || !newPassword) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const isMatch = await bcrypt.compare(
      oldPassword,
      currentUser.password,
    );

    if (!isMatch) {
      const error = new Error("Old Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    currentUser.password = await bcrypt.hash(newPassword, salt);

    await currentUser.save();

    res.status(200).json({
      message: "Password Reset Successful",
    });
  } catch (error) {
    next(error);
  }
};
