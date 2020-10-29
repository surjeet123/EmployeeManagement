const express = require('express')
const bodyParser = require('body-parser')
const mongodb = require('./mongodbconnect')
const employeedetails = require('./models/employee')



const { query } = require('express')
const app = express()//object creation
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

app.post("/employeeDetailsInsert", function (req, res) {
    employeedetailsinsert = {
        empname: req.body.empname,
        empid: req.body.empid,
        empage: req.body.empage,
        empgender: req.body.empgender,
        fathersname: req.body.fathersname,
        mothersname: req.body.mothersname,
        address: req.body.address,
        yearsofexperience: req.body.experience,
        lastcompany: req.body.lastcompany,
        salary: req.body.salary
    }

    employeedetails.create(employeedetailsinsert, function (err, result) {
        if (err) {
            res.send(false)
        } else {
            res.send(true)
        }
    })
})
app.get('/employeeDetail', function (req, res) {
    employeedetails.find(function (err, result) {
        res.send(result)
    })
})
app.listen(3000);
