$(document).ready(function () {
    // ==================================employee details get in the text box==========================================================
    var empid = GeneralUtilities.getParameterByName('id');
    var ResultModel = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeeDetailsEdit/?id=" + empid, "GET", {})
    ResultModel.then(function (result) {
        $("#empname").val(result.empname)
        $("#empID").val(result.empid)
        $("#age").val(result.empage)
        $("#gender").val(result.empgender)
        $("#fathersname").val(result.fathersname)
        $("#mothersname").val(result.mothersname)
        $("#address").val(result.address)
        $("#experience").val(result.yearsofexperience)
        $("#lastcompany").val(result.lastcompany)
        $("#salary").val(result.salary)
        $("#hdnforid").val(result._id)
    })
    // ==========================END====================================================================================================================
    // ===================================employee details insert=======================================================================================
    $("#btnsubmit").click(function () {

        var employee = {
            empname: $("#empname").val(),
            empid: $("#empID").val(),
            empage: $("#age").val(),
            empgender: $("#gender").val(),
            fathersname: $("#fathersname").val(),
            mothersname: $("#mothersname").val(),
            address: $("#address").val(),
            experience: $("#experience").val(),
            lastcompany: $("#lastcompany").val(),
            salary: $("#salary").val(),
            id: $('#hdnforid').val()
        }
        var ResultModel = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeedetailupdate", 'POST', employee);
        ResultModel.then(function (result) {
            if (result) {
                alert("record saved successfully");
                $('input[type="text"]').val('')
                $("#hdnforid").val(0)
            } else {
                alert("record not saved");

            }


        })

    })
    // ==========================================END=========================================================================================
    var empleavedetails = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeeleavedetails", "GET", {})
    empleavedetails.then(function (result) {
        var details = ""
        $.each(result, function (i, v) {
            details += "<tr>"
            if (v.empid != undefined)
                details += "<td>" + v.empid.empname + "</td>";
            else
                details += "<td></td>";
            details += "<td>" + v.leavefrom + "</td>"
            details += "<td>" + v.leaveto + "</td>"
            details += "</tr>"
        })
        $('.table').find("tbody").html(details)
    })

});

