import express from "express";
import { NewContact } from "../controller/publicControler.js";

const router = express.Router();

router.post("/new-contact", NewContact);

export default router;
