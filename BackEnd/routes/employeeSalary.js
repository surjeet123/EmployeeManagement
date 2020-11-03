const express = require('express');
const route = express.Router();
const employeeSalaryController = require('../controller/employeeSalary');

route.post('/Insertempsalary', employeeSalaryController.empsalary);
route.get('/showallempdetails',employeeSalaryController.ShowAllEmpSalary)
route.get('/getdetailsintextbox',employeeSalaryController.getDetailsTextboxModel)
route.post('/EmpSalaryUpdate',employeeSalaryController.updateEmpSalary)
module.exports=route;