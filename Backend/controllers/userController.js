import bcrypt from "bcrypt";
import Pet from "../models/pet.js";
import User from "../models/user.js";

// Signup
export const createUser = async (req, res) => {
  try {
    const { name, username, password, phone, address } = req.body;

    const existingUser = await User.findOne({ where: { username } });
    if (existingUser)
      return res.status(400).json({ error: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      username,
      password: hashedPassword,
      phone,
      address,
    });

    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Login
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });
    if (!user)
      return res.status(400).json({ error: "Invalid username or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid username or password" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User's Pets
export const getUserPets = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, { include: Pet });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json(user.Pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
