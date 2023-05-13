import getUser from '../controllers/get-user-data.controller.js';
import { Router } from "express";

const router = Router();
router.get("/get-user", getUser);

export default router;