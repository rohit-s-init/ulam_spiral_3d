const express = require("express");
require("dotenv").config();
const app = express();


app.use(express.static("public"));



app.listen(process.env.PORT || 9600,()=>{
    console.log("listending on http://localhost:9600/")
})