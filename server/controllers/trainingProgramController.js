import TrainingProgram from "../models/TrainingProgram.js";

// GET all training programs
export const getTrainingPrograms = async (req, res) => {
  try {
    const programs = await TrainingProgram.find();

    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST a training program
export const createTrainingProgram = async (req, res) => {
  try {
    const program = await TrainingProgram.create(req.body);

    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};