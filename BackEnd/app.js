const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./mongodbconnect')
const employeeRoutes = require('./routes/employee');
const leaveRoutes = require('./routes/employeeleave');
const empSalaryRoutes=require('./routes/employeeSalary')
const app = express();
app.use((req, res, next) => {
    res.header('Access-control-allow-origin', '*')
    res.header(
        'access-control-allow-headers',
        'origin,X-requested-With,Content-type,accept,authorization,cache-control');
    res.header('access-control-allow-methods', 'POST,GET,PUT,DELETE,OPTIONS');
    res.header('cache-control', 'private,no-cache,no-store,must-revalidate');
    res.header('expires', '-1');
    res.header('pragma', 'no-cache');
    next();
})
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/', employeeRoutes);
app.use('/leave', leaveRoutes);
app.use('/salary',empSalaryRoutes);

app.listen(3000);
