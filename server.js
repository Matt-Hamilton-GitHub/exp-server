const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Cors = require("cors")
require('dotenv').config();

//config
const app = express()
const port = process.env.PORT;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('src/'));


app.use(Cors())//adding headers to requests
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


const arr = [
    {name:'Sarah',
     age: 32},
     {name:'Kevin',
     age: 22},
     {name:'Martin',
     age: 12},
     {name:'Arthur',
     age: 23}
  ]


//default route
app.get('/',(req,res)=>  {res.status(200).sendFile(`${dirname} index.html`)});
app.post('/',(req,res)=> {res.status(200).send(`${req.body.userName}, Your Application is accepted and under review`)
        console.log(req.body.userName);
})
//contact route
app.get('/about',(req,res)=>{
    res.status(200).send('<h1>Matt Hamilton, 26 yrs old</h1>')

});

app.get('/users/get-data',(req,res)=>{res.status(200).send(arr)})

//np route
app.get('*', (req,res)=> res.send('<p>The page is out of reach</p>'))

app.listen(port,()=>{console.log(`the port runs on ${port}`);})