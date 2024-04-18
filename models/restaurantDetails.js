const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantDetails = new Schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    cuisineServed: {
        type: String,
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "category",
        },
    ],
    recommendedBy : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile",
        }
    ]
});

const RestaurantDetails = mongoose.model(
    "restaurantDetails",
    restaurantDetails
);

module.exports = RestaurantDetails;