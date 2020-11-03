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
                window.location.href = '/EmpShowSalary.html'

            } else {
                alert('record not saved')
            }
        })
    })
    // ======================================================END============================================================================================
    //------------------------------------------------SHOW-EMPLOYEE-SALARY=================================================================================
    var empSalaryModel = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/salary/showallempdetails", "GET", {})
    empSalaryModel.then(function (result) {
        var details = ""
        $.each(result, function (i, v) {
            details += "<tr>"
            if (v.empname != undefined)
                details += "<td>" + v.empname.empname + "</td>";
            else
                details += "<td></td>";
            details += "<td>" + v.salary + "</td>"
            details += "<td>" + v.month + "</td>"
            details += "<td> <input type='button' class='editdetails' value='edit salary' id='" + v._id + "'></td>"
            details += "</tr>"
        })
        $('.table').find("tbody").html(details)
    })
    //==============================================================END============================================================================================
    //----------------------------------------------------GET-EMP-DETAILS-IN-TEXTBOX---------------------------------------------------------------------
    $('body').on('click', '.editdetails', function () {
        var id = $(this).attr('id')
        var getDetailstextboxModel = GeneralUtilities.AjaxSuccessReturn('http://localhost:3000/salary/getdetailsintextbox?id=' + id, 'GET', {})
        getDetailstextboxModel.then(function (result) {
            $('#empname').val(result.empname.empname)
            $('#empsalary').val(result.salary);
            $('#empsalmonth').val(result.month);
        })
    })
    // ===========================================================END=====================================================================================
    // ------------------------------------------------------UPDATE-EMPLOYEE-SALARY--------------------------------------------------------------



})