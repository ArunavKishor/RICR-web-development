import express from 'express';
import {Newcontact} from "../controller/contactController.js"
const Router = express.Router();

Router.post('/newcontact', Newcontact);

export default Router;