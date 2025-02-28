import Pet from "../models/pet.js";
import User from "../models/user.js";

// Create a Pet
export const createPet = async (req, res) => {
    try {
        const pet = await Pet.create(req.body);
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
