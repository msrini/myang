//create a set of services for date operations (diff in days, ...)
var app = angular.module('ipapp');
app.factory("shareService", function(clientDetailObj) {

    return {
        clientDetail : clientDetailObj
    }
})