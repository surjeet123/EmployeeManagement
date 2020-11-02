const mongoose = require('mongoose');
const schema = mongoose.Schema;
const empSalarySchema=new schema({
    empname:{type:schema.Types.ObjectId,ref:'employeedetails'},
    salary:{type:String},
    month:{type:String}
})
module.exports=mongoose.model('employeesalary',empSalarySchema);