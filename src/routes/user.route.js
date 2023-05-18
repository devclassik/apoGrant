import { Router } from "express";
import { dataValidator } from '../middlewares/validator.js';
import { createUserData, deleteUserData, getAllUserData, getUserData, updateUserData } from "../controllers/user.controller.js";

const router = Router();

router.post("/create-user", dataValidator, createUserData);
router.put("/update/user/:userId", updateUserData);
router.get("/", getAllUserData);
router.get("/:userId", getUserData);
router.delete("/:userId", deleteUserData);


export default router;
