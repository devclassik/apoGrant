import { Router } from "express";
import createUserData from './create-user-data.js';
import getUserData from './get-user-data.js';

const router = Router();

router.use("/user", createUserData);
router.use("/user", getUserData);

export default router;
