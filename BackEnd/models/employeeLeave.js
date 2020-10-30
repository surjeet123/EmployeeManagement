const mongoose = require('mongoose')
const employeeLeaves = mongoose.Schema;
const employeeleaveSchema = new employeeLeaves({
    empid: { type: employeeLeaves.Types.ObjectId, ref: 'employee'  },
    leavefrom:{type:String},
    leaveto:{type:String}
})
module.exports=mongoose.model("employeeleave",employeeleaveSchema)