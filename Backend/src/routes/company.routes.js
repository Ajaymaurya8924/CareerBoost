const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/auth.middleware");
const isAdmin = require("../middleware/admin.middleware");
const { addCompany,  getAllCompanies ,   getCompanyById,updateCompany,deleteCompany} = require("../controllers/company.controller");

// Add Company

router.post("/add", isLoggedIn, isAdmin, addCompany);

router.put("/update/:id", isLoggedIn, isAdmin, updateCompany);

router.delete("/delete/:id", isLoggedIn, isAdmin, deleteCompany);


router.get("/all", getAllCompanies);
router.get("/:id", getCompanyById);



module.exports = router;