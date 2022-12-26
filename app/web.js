"use strict"
const express = require('express');
const app = express();



const home = require("./src/routes/home")



app.use("/",home); 
app.use("/login",home); 
app.use(express.static(`${__dirname}/src/public`))
module.exports= app;
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.listen(8080, ()=> {
  console.log('listening on 8080')
}) 