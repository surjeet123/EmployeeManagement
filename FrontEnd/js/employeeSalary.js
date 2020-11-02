$(document).ready(function () {
    //---------------------------------------------SEARCH-EMPLOYEE-BY-ID--------------------------------------------------------------------- 
    $("#btnempID").click(function () {
        const empid = $('#empID').val()
        const SearchEmployeemodel = GeneralUtilities.AjaxSuccessReturn('http://localhost:3000/employeedetailsbyempid?empid=' + empid, 'GET', {})
        SearchEmployeemodel.then(function (result) {
            var emplabel = "<label class='empid' id='" + result._id + "'>" + result.empname + "</label>"
            $('#dvLeaveSection').show();
            $("#empname").html(emplabel)
        })
    })
    // ===================================================END=================================================================================

    // ----------------------------------------------EMPLOYEE-SALARY-INSERT------------------------------------------------------------------
    $('#btnsave').click(function () {
        const empSalary = {
            empname: $('.empid').attr('id'),
            salary: $('#empSalary').val(),
            month: $('#drpdownMonths option:selected').val()
        }
        const SalaryModel = GeneralUtilities.AjaxSuccessReturn('http://localhost:3000/salary/Insertempsalary', 'POST', empSalary);
        SalaryModel.then(function (result) {
            if (result) {
                alert('record saved successfully')
                $("input[type='text']").val("");
                $("#empname").html('');
                $('#dvLeaveSection').hide();
                
            } else {
                alert('record not saved')
            }
        })
    })
})