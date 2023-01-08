"use strict"
const express = require('express');
const router = express.Router();
const ctrl=require("./home.ctrl")


router.get('/',ctrl.home)
 router.get('/login', ctrl.login)
 router.get('/AdministratorPage', ctrl.AdministratorPage)
 router.get('/anoverflowingvirtueServer', ctrl.anoverflowingvirtueServer)
 
 module.exports= router;
