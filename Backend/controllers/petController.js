import Pet from "../models/pet.js";
import User from "../models/user.js";
import cloudinary from "../config/cloudinary.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "pets",
      allowed_formats: ["jpg", "png", "jpeg"],
    },
  });
  
  const upload = multer({ storage });

// Create a Pet
export const createPet = async (req, res) => {
    try {
      const { name, category, type, description, age } = req.body;
      
      let imageUrl = "";
      if (req.file) {
        const uploadedImage = await cloudinary.uploader.upload(req.file.path);
        imageUrl = uploadedImage.secure_url;
      }
  
      const pet = await Pet.create({
        name,
        category,
        type,
        description,
        age,
        image: imageUrl,
      });
  
      res.status(200).json(pet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Get All Pets
export const getPets = async (req, res) => {
    try {
        const pets = await Pet.findAll({ include: User });
        res.status(200).json(pets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Adopt a Pet
export const adoptPet = async (req, res) => {
    try {
        const { userId, petId } = req.body;

        const pet = await Pet.findByPk(petId);
        if (!pet) return res.status(404).json({ error: "Pet not found" });

        await pet.update({ userId });

        res.status(200).json({ message: "Pet adopted successfully", pet });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePet = async (req, res) => {
    try {
        const { petId } = req.params;

        const pet = await Pet.findByPk(petId);
        if (!pet) return res.status(404).json({ error: "Pet not found" });

        await pet.destroy(); // Delete the pet
        res.status(200).json({ message: "Pet deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Pet with Image Upload
export const editPet = async (req, res) => {
    try {
      const { petId } = req.params;
      const { name, category, type, description, age } = req.body;
  
      const pet = await Pet.findByPk(petId);
      if (!pet) return res.status(404).json({ error: "Pet not found" });
  
      let imageUrl = pet.image;
      if (req.file) {
        const uploadedImage = await cloudinary.uploader.upload(req.file.path);
        imageUrl = uploadedImage.secure_url;
      }
  
      await pet.update({ name, category, type, description, age, image: imageUrl });
  
      res.status(200).json({ message: "Pet updated successfully", pet });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };