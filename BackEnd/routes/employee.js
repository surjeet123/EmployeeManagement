const express = require('express');
const route = express.Router();
const employeeController  =require('../controller/employee');

route.post("/employeeDetailsInsert", employeeController.EmployeeInsert);
route.get("/employeedetail",employeeController.employeerecord);
route.post("/employeedetailupdate",employeeController.employeeUpdateByID);
route.get('/employeedetailsbyempid',employeeController.employeeDetailsByEmpID);


module.exports = route;

