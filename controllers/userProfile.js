const userProfile = require('../models/userProfile');

const addUser = async(req,res) => {
    try {
        const { name, gender, contact, email, dob } = req.body;

        const newUser = new userProfile({
            name,
            gender,
            contact,
            email,
            dob
        });

        const savedUser = await newUser.save();

        res.status(201).json({ 
            message: "User added successfully",
            user: savedUser 
        });
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ 
            error: "Internal server error" 
        });
    }
};

module.exports = { addUser };