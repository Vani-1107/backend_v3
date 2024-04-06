// Import the BecomePartner model
const BecomePartner = require("../models/becomePartner");
const mailSender = require("../utils/mailSender");
const { becomePartnerEmail } = require("../mail/template/becomePartnerEmail");
// Define the function to save become partner data to the database
const becomePartnerDataToDB = async (req, res) => {
  try {
    // Extract data from the request body
    const { brandName, contactNumber, email } = req.body;

    // Create a new instance of the BecomePartner model
    const newPartner = new BecomePartner({ brandName, contactNumber, email });

    // Save the data to the database
    const savedData = await newPartner.save();
    const mail = await mailSender(
      email,
      "Greetings From Snackbae",
      becomePartnerEmail()
    );
    res.status(201).json({
      success: true,
      savedData,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { becomePartnerDataToDB };
