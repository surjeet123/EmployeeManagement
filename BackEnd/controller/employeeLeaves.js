const employeeleave = require('../models/employeeLeave');
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
    employeeLeavesinsert,
    employeeLeavesDetails
}