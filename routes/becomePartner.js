// Import required modules
const express = require("express");
const router = express.Router();

// Import the controller function for handling become partner data
const {
  becomePartnerDataToDB,
} = require("../controllers/becomePartner");

// Define the route to handle POST requests to save become partner data
router.post("/becomepartner", becomePartnerDataToDB);

module.exports = router;
