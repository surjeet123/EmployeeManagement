$(document).ready(function () {

    $.ajax({
        url: "",
        type: "GET",
        complete: function (result) {
            var empdetailsdropdown = ""
$.each(result.responseJSON,function(i,v){
    empdetailsdropdown+="<td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="<td>"+v.empname+"</td>"
    empdetailsdropdown+="</tr>"
})
$("#table").find("tbody").html(empdetailsdropdown)
        }
    })


})