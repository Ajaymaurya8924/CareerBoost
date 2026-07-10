const express = require("express");
const router = express.Router();

const { addCompany,  getAllCompanies ,   getCompanyById,updateCompany,deleteCompany} = require("../controllers/company.controller");

// Add Company
router.post("/add", addCompany);
router.get("/all", getAllCompanies);
router.get("/:id", getCompanyById);
router.put("/update/:id", updateCompany);
router.delete("/delete/:id", deleteCompany);


module.exports = router;