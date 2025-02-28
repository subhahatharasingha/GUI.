import express from "express";
import { createPet, getPets, adoptPet } from "../controllers/petController.js";

const router = express.Router();

router.post("/", createPet);
router.get("/", getPets);
router.post("/adopt", adoptPet); // Assign pet to user

export default router;
