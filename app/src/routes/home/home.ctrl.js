"use strict"  

const home = (요청,응답) => {
 
  응답.render("home/index");
}
const login = (요청,응답) => {
  
  응답.render('home/login');
}
const AdministratorPage = (요청,응답) => {
  
  응답.render('home/AdministratorPage');
}

// 
module.exports = {
  home,
  login,
  AdministratorPage,

};