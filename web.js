"use strict"
const express = require('express');
const app = express();



const home = require("./src/routes/home")



app.use("/",home); 
app.use("/login",home); 
app.use("/AdministratorPage",home); 
app.use("/anoverflowingvirtueServer",home); 

app.use(express.static(`${__dirname}/src/public`))
module.exports= app;
app.set("views", "./src/views")
app.set("view engine", "ejs")
app.listen(8080, ()=> {
  console.log('listening on 8080')
}) 




var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {
  server: '211.199.249.218', 
  authentication: {
      type: 'default',
      options: {
          userName: 'root', // update me
          password: 'a_zse4123!@#' // update me
      }
  },
  options: {
      database: 'SampleDB'
  }
}
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});



