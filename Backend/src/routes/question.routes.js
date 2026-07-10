const express = require("express");
const router = express.Router();

const { addQuestion } = require("../controllers/question.controller");

router.post("/add", addQuestion);

module.exports = router;