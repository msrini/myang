//create a set of services for date operations (diff in days, ...)
var app = angular.module('ipapp');
app.factory("dateService", function() {
    var dateDiff = function(sdate1) {
        var diff = "";
        // Convert both dates to milliseconds
        var date1_ms = Date.parse(sdate1);
        var date2_ms = Date.now();

        // Calculate the difference in milliseconds
        var diff_ms = date2_ms - date1_ms;
        //take out milliseconds
        diff_ms = diff_ms/1000;
        var seconds = Math.floor(diff_ms % 60);
        var secStr = ((seconds > 0) ? (seconds + ' second(s) ') : "");

        diff_ms = diff_ms/60;
        var minutes = Math.floor(diff_ms % 60);
        var minStr = ((minutes > 0) ? ("" + minutes + " min(s) ") : "");

        diff_ms = diff_ms/60;
        var hours = Math.floor(diff_ms % 24);
        var hrsStr = ((hours > 0) ? "" + hours + " hour(s) " : "");

        var days = Math.floor(diff_ms/24);
        var dayStr = ((days > 0) ? "" + days + " day(s) " : "");

        diff = dayStr + hrsStr + minStr + secStr;
        return(diff);
    }
    return {
        diff : dateDiff
    }
})