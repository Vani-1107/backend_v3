
const express = require("express");
const app = express();

const cors = require("cors");
const { dbconnect } = require("./config/dbConnect");
const dotenv = require("dotenv");
require("dotenv").config();
const fileUpload = require("./routes/fileUpload")
const becomePartner = require("./routes/becomePartner")
const PORT = process.env.PORT || 5000;


//database connect

dbconnect();


app.use(cors());
app.use(express.json());
app.use('/api/', fileUpload)
app.use("/api/", becomePartner);



app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
