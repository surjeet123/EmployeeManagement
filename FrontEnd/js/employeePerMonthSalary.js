$(document).ready(function(){
    // -------------------------------------------employee-salary-details--------------------------------------------------------------------
    var employeeDetails=GeneralUtilities. AjaxSuccessReturn('http://localhost:3000/salary/showallempdetails','GET',{});
    employeeDetails.then(function(result){
        var details=''
        $.each(result,function(i,v){
            details += "<tr>"
            if (v.empname != undefined)
                details += "<td class='id' value='"+v.empname._id+"'>" + v.empname.empname + "</td>";
            else
                details += "<td></td>";
            details += "<td><input type='text' class='empSalary' value='"+v.salary+"'></td>"
            details += "<td> <input type='button' class='editdetails' value='save'></td>"
            details += "</tr>"
        })
        $('.table').find("tbody").html(details)
        
    })
    // =================================================END=================================================================================
    // ------------------------------------------------SAVE-EMPLOYEE-SALARY---------------------------------------------------------------
   
        $('body').on('click','.editdetails',function(){
            const empSalary = {
                empname: $('.id').attr('value'),
                salary: $('.empSalary').val(),
                month: $('#dropdownStaticMonth option:selected').val()
            }
            const SalaryModel = GeneralUtilities.AjaxSuccessReturn('http://localhost:3000/salary/Insertempsalary', 'POST', empSalary);
            SalaryModel.then(function (result) {
                $(".empSalary").val("");
            })      
                 
             
            
        })
    

})