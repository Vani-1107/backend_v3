const categoryModel = require('../models/category');
const menuItem = require('../models/menuItem');

const addMenu = async (req, res) => {
    try {
        const { name, description, price, veg, category } = req.body;

        const newMenu = new menuItem({
            name,
            description,
            price,
            veg,
            category
        });

        const savedMenu = await newMenu.save();

        const updatedCategory = await categoryModel.findByIdAndUpdate(
            category,
            { $push: { menuItems: savedMenu._id } },
            { new: true } 
        );

        res.status(201).json({ 
            message: "Menu added successfully",
            menu: savedMenu ,
            updatedCategory : updatedCategory
        });
    } catch (error) {
        console.error("Error adding menu:", error);
        res.status(500).json({ 
            error: "Internal server error" 
        });
    }
};

const toggleMenuStatus = async(req,res) => {
    try{
        const {menuId} = req.body;

        const foundMenu = await menuItem.findById(menuId);

        if (!foundMenu) {
            return res.status(404).json({ error: "Menu not found" });
        }

        foundMenu.active = !foundMenu.active;

        await foundMenu.save();

        res.status(200).json({
             message: "Menu active status toggled successfully",
            updatedMenu: foundMenu 
        });

    } catch (error) {
        console.error("Error updating menu:", error);
        res.status(500).json({ 
            error: "Internal server error" 
        });
    }
};

const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price } = req.body;

        let updatedMenu = await menuItem.findById(id);

        if (name) updatedMenu.name = name;
        if (description) updatedMenu.description = description;
        if (price) updatedMenu.price = price;

        updatedMenu = await updatedMenu.save();

        res.status(200).json({ 
            message: "Menu updated successfully", 
            menu: updatedMenu 
        });

    } catch (error) {
        console.error("Error updating menu:", error);
        res.status(500).json({ 
            error: "Internal server error" 
        });
    }
};

module.exports = { addMenu,toggleMenuStatus,updateMenu };