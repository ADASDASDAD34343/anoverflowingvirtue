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


//

const mysql      = require('mysql');
const connection = mysql.createConnection({
host     : '211.199.249.218',
user     : 'newuser',
password : 'Gaspp2647@@',
database : 'Userdb'
});

connection.connect();

connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();

// Create connection to database


