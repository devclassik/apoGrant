import createUser from '../controllers/create-user-data.controller.js';
import { Router } from "express";
import { dataValidator } from '../middlewares/validator.js';

const router = Router();
router.post("/create-user", dataValidator, createUser);


export default router;
