const Question = require("../models/Question");

// Add Question
const addQuestion = async (req, res) => {
  try {
    const { company, type, question, answer } = req.body;

    if (!company || !type || !question || !answer) {
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

// Get Questions By Company & Type
const getQuestions = async (req, res) => {
  try {

    const { companyId, type } = req.params;

    const questions = await Question.find({
      company: companyId,
      type,
    });

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Questions
const getAllQuestions = async (req, res) => {
  try {

    const questions = await Question.find();

    return res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Get Single Question
const getQuestionById = async (req, res) => {

  try {

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      question,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

// Update Question
const updateQuestion = async (req, res) => {

  try {

    const question = await Question.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Question Updated Successfully",
      question,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Delete Question
const deleteQuestion = async (req, res) => {

  try {

    const question = await Question.findById(req.params.id);

    if (!question) {
      return res.status(404).json({
        success: false,
        message: "Question Not Found",
      });
    }

    await question.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Question Deleted Successfully",
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
  getQuestions,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
};

