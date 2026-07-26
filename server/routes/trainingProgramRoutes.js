import express from "express";

import {
  getTrainingPrograms,
  createTrainingProgram,
} from "../controllers/trainingProgramController.js";

const router = express.Router();

router.get("/", getTrainingPrograms);

router.post("/", createTrainingProgram);

export default router;