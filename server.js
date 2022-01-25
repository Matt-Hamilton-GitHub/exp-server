const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const password = process.env.PASSWORD;
const adminName = process.env.ADMIN_NAME;
const connection_url = `mongodb+srv://${adminName}:${password}@cluster0.14vum.mongodb.net/userDB?retryWrites=true&w=majority`

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
const app = express()
const port = process.env.PORT || 1020;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('src/'));

app.get('/',(req,res)=>{res.status(200).sendFile(`${dirname} index.html`)});

app.get('/about',(req,res)=>{res.status(200).send('<h1>Matt Hamilton, 26 yrs old</h1>')});

app.listen(port,()=>{console.log(`the port runs on ${port}`);})