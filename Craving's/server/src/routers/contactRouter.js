import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/newcontact", Contact);

export default router;
