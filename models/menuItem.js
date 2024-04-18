const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    description: {
        type : String,
    },
    price : {
        type:Number,
        required : true,
    },
    veg : {
        type: String,
        required : true,
    },
    category: {
        type : String,
        required:true,
    },
    active  : {
        type: Boolean,
        default : true,
    },
    mustTry : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile",
        }
    ],
    liked : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile",
        }
    ],
    notLiked : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userProfile",
        }
    ],
    comments : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "comments",
        }
    ]
});

const menu = mongoose.model("menuItem", menuItem);

module.exports = menu;