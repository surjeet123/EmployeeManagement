
$(document).ready(function () {
    var empid = employeeUtilities.getParameterByName('empid');
    $.ajax({
        url:"http://localhost:3000/employeeDetailsEdit/?empid="+empid,
        type:"GET",
        complete:function(result){
                $("#empname").val(result.responseJSON.empname)
                $("#empID").val(result.responseJSON.empid)
                $("#age").val(result.responseJSON.empage)
                $("#gender").val(result.responseJSON.empgender)
                $("#fathersname").val(result.responseJSON.fathersname)
                $("#mothersname").val(result.responseJSON.mothersname)
                $("#address").val(result.responseJSON.address)
                $("#experience").val(result.responseJSON.yearsofexperience)
                $("#lastcompany").val(result.responseJSON.lastcompany)
                $("#salary").val(result.responseJSON.salary)

        }
    })
});


employeeUtilities={
getParameterByName:function(name){
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
}