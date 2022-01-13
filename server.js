import express from "express";
import  mongoose  from "mongoose";
import bodyParser from "body-parser";
import path from 'path';

const dirname = `/Users/MattH/Desktop/Projects/web/building-server`
const app = express()
const port = process.env.PORT || 1020;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('/src/'));

app.get('/',(req,res)=>{res.status(200).sendFile(`${dirname}/src/index.html`)})
app.get('/about',(req,res)=>{res.status(200).send('<h1>Matt Hamilton, 26 yrs old</h1>')})

app.listen(port,()=>{console.log(`the port runs on ${port}`);})