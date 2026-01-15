import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/contact", Contact);

export default router;
