import express from "express";
import multer from "multer";
import {
  adoptPet,
  createPet,
  deletePet,
  editPet,
  getPets,
} from "../controllers/petController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), createPet);
router.get("/", getPets);
router.post("/adopt", adoptPet);
router.delete("/:petId", deletePet);
router.put("/:petId", upload.single("image"), editPet);

export default router;