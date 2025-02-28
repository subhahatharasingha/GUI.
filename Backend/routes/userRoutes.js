import express from "express";
import { createUser, loginUser, getUsers, getUserPets } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/:userId/pets", getUserPets); // Get pets adopted by a user

export default router;
