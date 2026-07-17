const express = require("express");
const router = express.Router();

const {
    register,
    login,
    logout,
    me,
    getAllStudents
} = require("../controllers/auth.controller");

const isLoggedIn = require("../middleware/auth.middleware");

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", isLoggedIn, me);

// Get All Registered Students
router.get("/students", isLoggedIn, getAllStudents);

module.exports = router;