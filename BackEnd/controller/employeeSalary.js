const employeeSalary = require('../models/employeeSalary')
const empsalary = function (req, res) {
    const employeesalary = {
        empname: req.body.empname,
        salary: req.body.salary,
        month: req.body.month
    }
    employeeSalary.create(employeesalary, function (err, result) {
        if (err) {
            res.send(false)
        } else {
            res.send(true)
        }
    })
}
const ShowAllEmpSalary = function (req, res) {
    employeeSalary.find({}).populate('empname', 'empname').exec(function (err, result) {
        res.send(result)
    })
}

module.exports = {
    empsalary,
    ShowAllEmpSalary
}