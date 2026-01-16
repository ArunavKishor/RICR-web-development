import express from 'express';
import {Newcontact} from "../controller/newContact.js"
const Router = express.Router();

Router.post('/newcontact', Newcontact);

export default Router;