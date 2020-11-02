const express = require('express');
const route = express.Router();
const employeeSalaryController = require('../controller/employeeSalary');

route.post('/Insertempsalary', employeeSalaryController.empsalary);
route.get('/showallempdetails',employeeSalaryController.ShowAllEmpSalary)
module.exports=route;