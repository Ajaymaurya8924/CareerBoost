const express = require("express");
const router = express.Router();

const {
  addQuestion,
  getQuestions,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/question.controller");

// Add Question
router.post("/add", addQuestion);

// Get All Questions
router.get("/all", getAllQuestions);

// Get Single Question
router.get("/single/:id", getQuestionById);

// Get Questions By Company & Type
router.get("/:companyId/:type", getQuestions);

// Update Question
router.put("/update/:id", updateQuestion);

// Delete Question
router.delete("/delete/:id", deleteQuestion);

module.exports = router;