const mongoose = require('mongoose')
const employeeLeaves = mongoose.Schema;
const employeeleaveSchema = new employeeLeaves({
    empid: { type: employeeLeaves.Types.ObjectId, ref: 'employeedetails' },
    leavefrom: { type: String },
    leaveto: { type: String }
})
module.exports = mongoose.model("employeeleave", employeeleaveSchema)