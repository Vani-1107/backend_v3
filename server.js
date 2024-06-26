const express = require("express");
const app = express();

const cors = require("cors");
const { dbconnect } = require("./config/dbConnect");
const dotenv = require("dotenv");
require("dotenv").config();
const fileUpload = require("./routes/fileUpload")
const becomePartner = require("./routes/becomePartner")
const blogs = require("./routes/blogs");
const category = require("./routes/category");
const menu = require("./routes/menu");
const restaurantLogin  = require('./routes/restaurantLogin');
const user= require('./routes/userProfile');
const restaurantRecommendation = require('./routes/restaurantRecommendation');
const menuRecommendation = require('./routes/menuRecommendation');
const comments = require('./routes/comment');

const PORT = process.env.PORT || 5000;

//database connect

dbconnect();

app.use(cors());
app.use(express.json());
app.use('/api/', fileUpload)
app.use("/api/", becomePartner);
app.use("/api",blogs);
app.use('/api',category);
app.use('/api',menu);
app.use('/api',restaurantLogin);
app.use('/api',user);
app.use('/api',restaurantRecommendation);
app.use('/api',menuRecommendation);
app.use('/api',comments);

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});