import express from "express";
import { createUser, loginUser, getUsers, getUserPets, getUserById,updateUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:userId/pets", getUserPets);
router.get("/:userId", getUserById);
router.put("/:userId", updateUser);




export default router;