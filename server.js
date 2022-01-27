const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

//config
const app = express()
const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('src/'));

//set private data from env
const password = process.env.PASSWORD;
const adminName = process.env.ADMIN_NAME;

//connect to a database and create a schema
const connection_url = `mongodb+srv://${adminName}:${password}@cluster0.14vum.mongodb.net/userDB?retryWrites=true&w=majority`

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})

const UserSchema = new mongoose.Schema({
    id: {
        type: Number,
        default: new Date()
    },
    name : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ssn: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: new Date,
    }
});


//default route
app.get('/',(req,res)=>{res.status(200).sendFile(`${dirname} index.html`)});
app.post('/',(req,res)=> {res.status(200).send(`${req.body.userName}, Your Application is accepted and under review`)
        console.log(req.body.userName);
})
//contact route
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>Matt Hamilton, 26 yrs old</h1>')

});

//np route
app.get('*', (req,res)=> res.send('<p>The page is out of reach</p>'))

app.listen(port,()=>{console.log(`the port runs on ${port}`);})