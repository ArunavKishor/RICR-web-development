import express from "express";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/loginr", UserLogin);
router.post("/logout", Logout);

export default router;
