
GeneralUtilities = {
    AjaxSuccessReturn: function (url, type, data) {
        return $.ajax({
            url: url,
            type: type,
            data: JSON.stringify(data),
            contentType: 'application/json; charset=utf-8'
        })
    },
    getParameterByName: function (name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
}