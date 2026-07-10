const Question = require("../models/Question");

// Add Question
const addQuestion = async (req, res) => {
  try {

    const {
      company,
      type,
      question,
      answer,
    } = req.body;

    if (
      !company ||
      !type ||
      !question ||
      !answer
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newQuestion = await Question.create({
      company,
      type,
      question,
      answer,
    });

    return res.status(201).json({
      success: true,
      message: "Question Added Successfully",
      question: newQuestion,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addQuestion,
};