const mongoose = require('mongoose')
const employeedetails = mongoose.Schema;
const employeeSchema = new employeedetails({
    empname: { type: String },
    empid: { type: String },
    empage: { type: String },
    empgender: { type: String },
    fathersname: { type: String },
    mothersname: { type: String },
    address: { type: String },
    yearsofexperience: { type: String },
    lastcompany: { type: String },
    salary: { type: String }
})
module.exports=mongoose.model("employeedetails",employeeSchema)