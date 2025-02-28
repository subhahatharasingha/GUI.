import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

app.use(express.json());

app.use("/users", userRoutes);
app.use("/pets", petRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error("Unable to connect to database:", error);
    }
    console.log(`Server running on http://localhost:${PORT}`);
});
