import express from "express";
import cors from "cors";

import trainingProgramRoutes from "./routes/trainingProgramRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Alilee API is running 🚀",
  });
});

app.use("/api/training-programs", trainingProgramRoutes);

export default app;