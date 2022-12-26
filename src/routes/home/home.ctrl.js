"use strict"  

const home = (요청,응답) => {
 
  응답.render("home/index");
}
const login = (요청,응답) => {
  
  응답.render('home/login');
}

// 
module.exports = {
  home,
  login,

};