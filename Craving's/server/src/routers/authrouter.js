import express from "express";
import { UserLogin,UserRegister,UserLogout } from "../controller/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/loginr", UserLogin);
router.get("/logout", UserLogout);

export default router;
