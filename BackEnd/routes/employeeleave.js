const express = require('express');
const route = express.Router();
const employeeController  =require('../controller/employee');

route.post('/employeeleave',employeeController.employeeLeavesinsert );
route.get('/employeeleavedetails',employeeController.employeeLeavesDetails);


module.exports = route;

