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
        var url = "http://localhost:3000/employeeDetailsInsert";
        if ($("#hdnforid").val() !== "0") {
            url = "http://localhost:3000/employeedetailupdate";
            employee.id = $('#hdnforid').val();
        }
        var ResultModel = GeneralUtilities.AjaxSuccessReturn(url, 'POST', employee);
        ResultModel.then(function (result) {
            if (result) {
                alert("record saved successfully")
                $('input[type="text"]').val('')
                $("#hdnforid").val(0)
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
            empdetailsdropdown += "<td><a href='/Editemployee.html?id=" + v._id + "'>Edit Employee</a></td>"
            empdetailsdropdown += "</tr>"
        })
        $("table").find("tbody").html(empdetailsdropdown)
    })
    //====================================================END================================================================================

    //======================employee details by empid=========================================================================================
    $("#btnsearchemployee").click(function () {
        var empid = $("#empid").val()
        var employeeDetailsByid = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeedetailsbyempid?empid=" + empid, "GET", {})
        employeeDetailsByid.then(function (result) {
            var emplabel = "<label class='empid' id='" + result._id + "'>" + result.empname + "</label>"

            $("#empname").html(emplabel)
        })

    })



    //==============================END========================================================================================================
    //=============employee leave insert with id=============================================================================================
    $("#btnsaverecord").click(function () {
        var employeeleave = {
            empid: $(".empid").attr('id'),
            leavefrom: $('#leavefrom').val(),
            leaveto: $("#leaveto").val()
        }
        var employeeDetails = GeneralUtilities.AjaxSuccessReturn("http://localhost:3000/employeeleave", "POST", employeeleave);
        employeeDetails.then(function (result) {
            if (result) {
                alert("record saved")
                $("input[type='text'],[type='date']").val("")
                $("#empname").html('')
                

            } else {
                alert("record not saved")
            }
        })
    })
    // ======================================END===================================================================================================





})
