const express = require("express");
const router = express.Router();

const { addQuestion,getQuestions } = require("../controllers/question.controller");

router.post("/add", addQuestion);
router.get("/:companyId/:type", getQuestions);

module.exports = router;