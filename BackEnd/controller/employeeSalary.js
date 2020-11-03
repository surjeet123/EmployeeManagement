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
const getDetailsTextboxModel = function (req, res) {
    employeeSalary.findOne({ _id: req.query.id }).populate('empname').exec(function (err, result) {
        res.send(result)
    })
}
const updateEmpSalary = function (req, res) {
    employeeSalary.updateOne({ _id: req.body.id }, { salary: req.body.salary, month: req.body.month }, function (err, result) {
        res.send(result)
    })
}

module.exports = {
    empsalary,
    ShowAllEmpSalary,
    getDetailsTextboxModel,
    updateEmpSalary
}