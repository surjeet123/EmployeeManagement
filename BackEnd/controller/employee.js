const employeedetails = require('../models/employee');
const employeeleave = require('../models/employeeLeave');
const EmployeeInsert = function (req, res) {
    var employeedetailsinsert = {
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
}
const employeerecord = function (req, res) {
    employeedetails.find(function (err, result) {
        res.send(result)

    })
}
const employeeRecordByID = function (req, res) {
    employeedetails.findOne({ _id: req.query.id }, function (err, result) {
        res.send(result)
    })
}
const employeeUpdateByID = function (req, res) {
    var emp = req.body;
    employeedetails.updateOne({ _id: req.body.id },
        {
            empname: req.body.empname, empid: emp.empid, empage: emp.empage, empgender: req.body.empgender,
            fathersname: req.body.fathersname, mothersname: req.body.mothersname, address: req.body.address,
            yearsofexperience: req.body.yearsofexperience, lastcompany: req.body.lastcompany,
            salary: req.body.salary
        },
        function (err, result) {
            res.send(result)
        })
}
const employeeDetailsByEmpID = function (req, res) {
    employeedetails.findOne({ empid: req.query.empid }, function (err, result) {
        res.send(result)
    })
}
const employeeLeavesinsert = function (req, res) {
    var empleave = {
        empid: req.body.empid,
        leavefrom: req.body.leavefrom,
        leaveto: req.body.leaveto
    }
    employeeleave.create(empleave, function (err, result) {
        if (err) {
            res.send(false)
        } else {
            res.send(true)
        }
    })
}
const employeeLeavesDetails = function (req, res) {
    employeeleave.find({}).populate('empid', 'empname').exec(function (err, result) {
        res.send(result)
    })
}
module.exports = {
    EmployeeInsert,
    employeerecord,
    employeeRecordByID,
    employeeUpdateByID,
    employeeDetailsByEmpID,
    employeeLeavesinsert,
    employeeLeavesDetails
}