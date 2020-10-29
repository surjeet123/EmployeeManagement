$(document).ready(function () {
    //--code to insert employee details
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
            salary: $("#salary").val()
        }
        var ResultModel = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeeDetailsInsert", 'POST', employee);
        ResultModel.then(function (result) {
            if (result) {
                alert("record saved successfully")
                $('input[type="text"]').val('');
            } else {
                alert("record not saved")
            }
        })
    })
    //-------------------------------------------------------------END--------------------------------------------------------------------

    //--------------------------------------------------show details of employee--------------------------
    var employeeModel = GeneralUtilities.AjaxSuccessReturn('http://localhost:3000/employeeDetail', 'GET', {});
    employeeModel.then(function (result) {
        var empdetailsdropdown = ""
        $.each(result, function (i, v) {
            empdetailsdropdown += "<tr>"
            empdetailsdropdown += "<td>" + v.empname + "</td>"
            empdetailsdropdown += "<td>" + v.empid + "</td>"
            empdetailsdropdown += "<td>" + v.empage + "</td>"
            empdetailsdropdown += "<td>" + v.empgender + "</td>"
            empdetailsdropdown += "<td>" + v.fathersname + "</td>"
            empdetailsdropdown += "<td>" + v.mothersname + "</td>"
            empdetailsdropdown += "<td>" + v.address + "</td>"
            empdetailsdropdown += "<td>" + v.yearsofexperience + "</td>"
            empdetailsdropdown += "<td>" + v.lastcompany + "</td>"
            empdetailsdropdown += "<td>" + v.salary + "</td>"
            empdetailsdropdown += "</tr>"
        })
        $("table").find("tbody").html(empdetailsdropdown)
    })
    //====================================================END==============================================
})
GeneralUtilities = {
    AjaxSuccessReturn: function (url, type, data) {
        return $.ajax({
            url: url,
            type: type,
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8'
        })
    }
}
