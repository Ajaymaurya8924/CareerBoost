const Company = require("../models/Company");

// Add Company
const addCompany = async (req, res) => {
  try {
    const {
      companyName,
      logo,
      description,
      package,
      location,
      eligibility,
      skills,
      selectionProcess,
      applyLink,
      lastDate,
    } = req.body;

    // Validation
    if (
      !companyName ||
      !description ||
      !package ||
      !location ||
      !eligibility ||
      !lastDate
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const company = await Company.create({
      companyName,
      logo,
      description,
      package,
      location,
      eligibility,
      skills,
      selectionProcess,
      applyLink,
      lastDate,
    });

    return res.status(201).json({
      success: true,
      message: "Company Added Successfully",
      company,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Companies
const getAllCompanies = async (req, res) => {
  try {

    const companies = await Company.find();

    return res.status(200).json({
      success: true,
      count: companies.length,
      companies,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Single Company
const getCompanyById = async (req, res) => {
  try {

    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Update Company
const updateCompany = async (req, res) => {
  try {

    const company = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Company Updated Successfully",
      company,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Company
const deleteCompany = async (req, res) => {
  try {

    const company = await Company.findById(req.params.id);

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company Not Found",
      });
    }

    await company.deleteOne();

    return res.status(200).json({
      success: true,
      message: "Company Deleted Successfully",
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  addCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
};